import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

const expTable = [
  20,
  40,
  100,
  500,
  1000,
  3000,
  5000
];

const EARN_EXPERIENCE = 10;

export const gitHook = functions.https.onRequest(async (request, response) => {
  console.log(request.body.sender.id);
  const pets = await db.collection('pets')
    .where('owerGitHubId', '==', request.body.sender.id)
    .get()

  const pet = pets.docs[0].data();
  let level = 1;

  expTable.some(nextExp => {
    if (pet.exp + EARN_EXPERIENCE >= nextExp) {
      level++;
      return false;
    } else {
      return true;
    }
  });

  const increment = admin.firestore.FieldValue.increment(EARN_EXPERIENCE);
  pets.docs.forEach(doc => doc.ref.update({
    exp: increment,
    level
  }));
  response.send('success');
});
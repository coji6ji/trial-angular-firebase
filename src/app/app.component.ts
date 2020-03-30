import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'git-pet';
  user$ = this.afAuth.afUser$;

  constructor(
    private afAuth: AuthService
  ) {}

  logout() {
    this.afAuth.logout();
  }
}

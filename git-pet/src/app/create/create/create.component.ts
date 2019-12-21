import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PetService } from 'src/app/services/pet.service';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true
    },
    centeredSlides: true,
    slidesPerView: 3
  };

  petIds = [...Array(10)].map((_, i) => i + 1);
  selectedPetId = 0;

  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]],
    gender: ['', [
      Validators.required,
      Validators.pattern(/male|female/)
    ]]
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    const formData = this.form.value;
    this.petService.createPet({
      name: formData.name,
      gender: formData.gender,
      petImageId: this.selectedPetId,
      level: 1,
      exp: 0,
      tranerId: this.authService.uid
    });
  }

}

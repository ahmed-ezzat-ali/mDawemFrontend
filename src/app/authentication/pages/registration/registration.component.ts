import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationModel: RegistrationModel;
  stage = 1;
  constructor() {
    debugger

    this.registrationModel = {
      type: 0,
      name: null,
      email: null,
      password: null,
      companyName: null,
      companySize: null
    }
  }

  ngOnInit(): void {
    debugger
    console.log(this.registrationModel);

  }

  next() {
    this.stage++;
  }

  previous() {
    this.stage--;
  }

}

export interface RegistrationModel {
  type: number;
  name: string;
  email: string;
  password: string;
  companyName: string;
  companySize: string;
}

import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/services/base-httpClient/base-http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'md-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationModel: RegistrationModel;
  stage = 1;
  constructor(private http: BaseHttpService, private authservice: AuthService) {
    debugger

    this.registrationModel = {
      type: 0,
      name: null,
      surname: null,
      userName: null,
      emailAddress: null,
      password: null,
      companyName: null,
      companySize: null,
      captchaResponse: null,
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
    debugger
    this.stage--;
  }

  register() {
    debugger
    this.authservice.register(this.registrationModel).subscribe(res => {
      debugger
    }, error => {
      debugger

    })
  }

  // register2() {
  //   let input = {
  //     "name": "ahmed",
  //     "surname": "ezzat",
  //     "userName": "ezzatly1",
  //     "emailAddress": "ahmed.ezzat@7sala.com",
  //     "password": "Password1!",
  //     "captchaResponse": "string"
  //   }
  //   this.authservice.register2(input).subscribe(res => {
  //     debugger
  //     if (res.success) {

  //     }
  //   }, error => {
  //     debugger

  //   })

  // }

}

export interface RegistrationModel {
  type: number;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  companyName: string;
  companySize: string;
  captchaResponse: string;
}

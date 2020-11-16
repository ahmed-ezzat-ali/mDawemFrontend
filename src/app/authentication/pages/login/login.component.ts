import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  constructor(private http: HttpClient) {
    this.loginModel = {
      email: null,
      password: null
    };
  }

  ngOnInit(): void {

  }

}

export interface LoginModel {
  email: string;
  password: string;
}

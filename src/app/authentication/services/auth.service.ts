import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../pages/login/login.component';
import { RegistrationModel } from '../pages/registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(body: RegistrationModel): Observable<any> {
    return this.http.post('/services/app/Account/Register', body);
  }

  login(body: LoginModel): Observable<any> {
    return this.http.post('/TokenAuth/Authenticate', body);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post('/services/app/Notification/SendForgetPassword?' + email, null);
  }


 
}

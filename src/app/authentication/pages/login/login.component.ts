import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from 'src/app/services/common/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = true;
  loginModel: LoginModel;
  constructor(private authService: AuthService, public commonService: CommonService, private cookieService: CookieService,
    private router: Router) {
    this.loginModel = {
      userNameOrEmailAddress: null,
      password: null,
      rememberClient: false
    };
  }

  ngOnInit(): void {

  }

  login(form: NgForm) {

    this.commonService.showLoading();

    if (!form.valid) {
      return;
    }

    this.authService.login(this.loginModel).subscribe(res => {
      if (res.success) {
        console.log('res.result.accessToken', res.result.accessToken);
        console.log('res.result.encryptedAccessToken', res.result.encryptedAccessToken);
        console.log('res.result.expireInSeconds', res.result.expireInSeconds);
        console.log('res.result.userId', res.result.userId);


        const tokenExpireDate = this.loginModel.rememberClient
          ? new Date(new Date().getTime() + 1000 * res.result.expireInSeconds) : undefined;
        

        this.cookieService.set('accessToken', res.result.accessToken, tokenExpireDate );
        this.cookieService.set('encryptedAccessToken', res.result.encryptedAccessToken, tokenExpireDate );
        this.cookieService.set('userId', res.result.userId, tokenExpireDate);
        this.router.navigateByUrl('/time-management');
        this.commonService.hideLoading();


      }

    });

  }

}

export interface LoginModel {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}

import { HostBinding, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseHttpService } from 'src/app/services/base-httpClient/base-http.service';
import { CommonService } from 'src/app/services/common/common.service';
import { AuthService } from '../../services/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'md-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '*'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class RegistrationComponent implements OnInit {

  registrationModel: RegistrationModel;
  stage = 1;
  emailSent = false;

  helpMenuOpen: string;

  constructor(private http: BaseHttpService, private authservice: AuthService, public commonService: CommonService,
    private snackBar: MatSnackBar) {


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

    this.helpMenuOpen = 'in';
  }

  next() {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    setTimeout(() => {
      this.stage++;
      this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    }, 400);
  }

  previous() {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';

    setTimeout(() => {
      this.stage--;
      this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    }, 400);
  }

  register() {
    this.commonService.showLoading();
    this.authservice.register(this.registrationModel).subscribe(res => {
      this.commonService.hideLoading();
      if (res.success) {
        this.snackBar.open('Please check your inbox, we have sent you and email with the new password.', null,
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

        this.emailSent = true;

      }
    });
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }



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

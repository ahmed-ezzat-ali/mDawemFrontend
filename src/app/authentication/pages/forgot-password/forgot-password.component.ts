import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/services/common/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'md-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = null;
  emailSent = false;
  constructor(private snackBar: MatSnackBar, private authService: AuthService, public commonService: CommonService) { }

  ngOnInit(): void {
  }

  sendEmailNotification() {
    this.commonService.showLoading();
    this.authService.forgotPassword(this.email).subscribe(res => {
      debugger
      if (res.success) {
        this.snackBar.open('Please check your inbox, we have sent you and email with the new password.', null,
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        this.emailSent = true;
      }
      this.commonService.hideLoading();
    })




  }

}

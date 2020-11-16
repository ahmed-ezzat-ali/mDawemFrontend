import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'md-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = null;
  emailSent = false;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sendEmail(){

    this.snackBar.open('Please check your inbox, we have sent you and email with the new password.', null,
      {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
      });

      this.emailSent = true;

  }

}

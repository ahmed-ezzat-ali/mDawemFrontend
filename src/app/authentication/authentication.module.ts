import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication.routing.module';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, ResetPasswordComponent, AuthTestComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class AuthenticationModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/app.loginComponent';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import {VerifyCodeComponent} from './verifyCode/verifyCode.component';


const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },
  {
    path:  'login',
    component:  LoginComponent
},
  {
      path:  'forgot-password',
      component:  ForgotPasswordComponent
  },
  {
      path:  'reset-password',
      component:  ResetPasswordComponent
  },
  {
    path:  'verify-code/:phone',
    component:  VerifyCodeComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyCodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

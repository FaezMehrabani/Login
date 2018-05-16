import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/app.loginComponent';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import {VerifyCodeComponent} from './verifyCode/verifyCode.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

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
      path:  'reset-password/:tk',
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
    HttpModule,
    FormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.cubeGrid,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

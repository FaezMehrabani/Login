import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/uac/login/app.loginComponent';
import { ForgotPasswordComponent } from '../components/uac/forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from '../components/uac/resetPassword/resetPassword.component';
import { VerifyCodeComponent } from '../components/uac/verifyCode/verifyCode.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const RouteConfig: Routes = [

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
    },
    {
        path: 'dashboard',
        component : DashboardComponent
    }
  ];
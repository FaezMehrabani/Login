import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouteConfig } from './configuration/routeConfig';
import { NbThemeModule } from '@nebular/theme';
// import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/uac/login/app.loginComponent';
import { ForgotPasswordComponent } from './components/uac/forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './components/uac/resetPassword/resetPassword.component';
import {VerifyCodeComponent} from './components/uac/verifyCode/verifyCode.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyCodeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouteConfig),
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
  }),
  NbThemeModule.forRoot({ name: 'default' }), // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
  LocalStorageModule.withConfig({
      storageType: 'localStorage'
})
  ],
  providers: [], // we need this service for the sidebar
  bootstrap: [AppComponent],
  exports: [RouterModule],
  
})
export class AppModule { }

function redirectRouterLessonUnmatched(req,res) {
  res.sendFile("index.html", { root: './index.html' });
}

// app.use(redirectRouterLessonUnmatched);
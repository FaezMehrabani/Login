import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../../../app/services/api.service'
import { User } from '../../../Model/User';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './app.loginComponent.html',
  styleUrls: ['./app.loginComponent.css']
})
export class LoginComponent  {

  public loading = false;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute ,private localStorageService: LocalStorageService) { 
    //get the data
    this.checkLocalStorage();
  }
  
  user = new User();
  // user: User = {
  //   phone:"09122955499",
  //   password: "qwerty123",
  //   coordiantion : "22222"
  // };


  

  public  getToken(){
    this.loading = true;
    this.apiService.getToken(this.user).subscribe((data:  any) => {
        localStorage.setItem('tokenKey', data.token);
        this.loading = false;
        this.router.navigate(['../dashboard'], { relativeTo: this.route });
    },  (err) =>{
      this.loading = false;
     });
  }

  public forgotPassword() {
    this.router.navigate(['../forgot-password'], { relativeTo: this.route });
  }

  private checkLocalStorage(){
    if (localStorage.getItem('tokenKey') != null){
      this.router.navigate(['../dashboard'], { relativeTo: this.route });
    }
  }

}





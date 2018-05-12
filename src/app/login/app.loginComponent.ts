import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../app/services/api.service'
import { User } from '../../assets/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './app.loginComponent.html',
  styleUrls: ['./app.loginComponent.css']
})
export class LoginComponent  {

  
  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) { }
  
  user: User = {
    phone:"09369043503",
    password: "Masoud1234",
    coordiantion : "22222"
  };
  // user: User = {
  //   phone:"09122955499",
  //   password: "qwerty123",
  //   coordiantion : "22222"
  // };

  public  getToken(){
    
    this.apiService.getToken(this.user).subscribe((data:  any) => {
       debugger;
        console.log(data);
    }),
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
  }

  public forgotPassword() {
    this.router.navigate(['../forgot-password'], { relativeTo: this.route });
  }

}





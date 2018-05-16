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

  public loading = false;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) { }
  
  user = new User();
  // user: User = {
  //   phone:"09122955499",
  //   password: "qwerty123",
  //   coordiantion : "22222"
  // };

  public  getToken(){
    this.loading = true;
    this.apiService.getToken(this.user).subscribe((data:  any) => {
        this.loading = false;
        alert("Welcome...");
    },  (err) =>{
      this.loading = false;
     });
  }

  public forgotPassword() {
    this.router.navigate(['../forgot-password'], { relativeTo: this.route });
  }

}





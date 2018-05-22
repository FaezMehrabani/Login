import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../../../app/services/api.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
  
@Component({
  selector: 'app-reset-password',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['../../../../app/app.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPassword ={
    password: '',
    token: ''
  };
  public loading = false;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.resetPassword.token= params.tk; 
    });
  }

  ngOnInit() {
  }

  public setPassword() {
        this.loading = true;
          this.apiService.setPassword(this.resetPassword).subscribe((data:  any) => {
            this.loading = false;
            this.router.navigate(['../../login'], { relativeTo: this.route });
         },  (err) =>{
          this.loading = false;
         }  );
         
      }

}

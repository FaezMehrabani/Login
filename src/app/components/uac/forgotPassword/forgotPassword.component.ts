import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../../../app/services/api.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['../../../../app/app.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public loading = false;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) {
  }
  phone = ""; 
  forgotForm: FormGroup;
  
  public sendCode(form) {

    //this.router.navigate(['../verify-code' ,this.phone],{ relativeTo: this.route });
    this.loading = true;
      this.apiService.getVerificationCode(this.phone).subscribe((data:  any) => {
        this.loading = false;
        this.router.navigate(['../verify-code',this.phone], { relativeTo: this.route });
         },  (err) =>{
          this.loading = false;

         }  );
  }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      phone:new FormControl('', [ 
       Validators.required
    ])
  });
  }

}

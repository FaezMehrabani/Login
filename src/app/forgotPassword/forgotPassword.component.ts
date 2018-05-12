import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../app/services/api.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['../../app/app.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) {
  }
  phone = ""; 
  forgotForm: FormGroup;
  
  public sendCode(form) {

    this.router.navigate(['../verify-code' ,this.phone],{ relativeTo: this.route });
    
    //   this.apiService.getVerificationCode(this.phone).subscribe((data:  any) => {
      
    //     this.router.navigate(['../reset-password'], { relativeTo: this.route });
    
    //    console.log(data);
    //  });
  }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      phone:new FormControl('', [ 
       Validators.required
    ])
  });
  }

}

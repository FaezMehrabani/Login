import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../app/services/api.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['../../app/app.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) {
  }
  password = ""; 

  ngOnInit() {
  }

  public setPassword() {

    this.router.navigate(['../login'], { relativeTo: this.route });
        
        //   this.apiService.setPassword(this.password).subscribe((data:  any) => {
          
        //     this.router.navigate(['../login'], { relativeTo: this.route });
        
        //    console.log(data);
        //  });
      }

}

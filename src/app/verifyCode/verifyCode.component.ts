import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../app/services/api.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { timer} from 'rxjs';
import { take, map } from 'rxjs/operators';
import { MinuteSecondsPipe } from '../../assets/numberToTime';


@Component({
  selector: 'app-verify-code',
  templateUrl: './verifyCode.component.html',
  styleUrls: ['../../app/app.component.css']
})
export class VerifyCodeComponent implements OnInit {

  verify ={
    phone: '',
    code: ''
  };
  countDown;
  count = 60;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.verify.phone= params.phone; 
    });
   }

  ngOnInit() {
  //  let test = new MinuteSecondsPipe().transform(180);
     this.countDown  = timer(0,1000).pipe(take(this.count), map(()=> --this.count));
  }

    
  public checkVerifyCode(form) {
    
        this.router.navigate(['../../reset-password'],{ relativeTo: this.route });
        
        //   this.apiService.checkVerificationCode(this.verify.phone , this.verify.code).subscribe((data:  any) => {
        //     this.router.navigate(['../reset-password'], { relativeTo: this.route });
        //     console.log(data);
        //  });
      }

}

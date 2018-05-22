import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { APIService } from '../../../app/services/api.service'
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  public loading = false;

  constructor(private  apiService:  APIService,private router: Router, private route: ActivatedRoute) { }
 

}





import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  API_BaseURL='https://dev.tikschool.com/api/v1';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': "application/json" }) }; 
  
  constructor(private  httpClient:  HttpClient) { }

  getToken(user){

    return  this.httpClient.post(`${this.API_BaseURL}/user/login_for_admin` ,user, this.httpOptions);

    // return  this.httpClient.post(`${this.API_BaseURL}/user/login_for_admin` ,{phone: '09369043503',password: 'Masoud1234',coordiantion: "1"    });
    
    // return  this.httpClient.post(`${this.API_BaseURL}/user/login_for_admin` ,{},{headers:{phone: '09369043503',password: 'Masoud1234',coordiantion: "1"    }} );
    
  }

  getVerificationCode(phone){
    return  this.httpClient.post(`${this.API_BaseURL}/user/forget_password` ,{phone : phone});
  }

  checkVerificationCode(phone, code){
    return  this.httpClient.post(`${this.API_BaseURL}/user/verificate` ,{phone : phone , code:code , device_id: "" });
  }

  setPassword(password){
    return  this.httpClient.post(`${this.API_BaseURL}/user/set_password` ,{password : password });
  }

}

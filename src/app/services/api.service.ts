import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, URLSearchParams   } from '@angular/http';
import { retry } from 'rxjs/internal/operators/retry';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  API_BaseURL='https://dev.tikschool.com/api/v1';
   httpOptions = { headers: new HttpHeaders({ 'Content-Type': "application/x-www-form-urlencoded" }) }; 
   headers = new Headers();

  constructor(private  httpClient:  HttpClient ,private http: Http) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
   }


  

  getToken(user): Observable<any>{
    //  let formData = new FormData();
    //  formData.append('phone', user.phone);
    //  formData.append('password', user.password);
    //  formData.append('coordiantion', user.coordiantion);
    // var req = new XMLHttpRequest();
    // req.open("POST", "https://dev.tikschool.com/api/v1/user/login_for_admin");

    // return  this.httpClient.post(`${this.API_BaseURL}/user/login_for_admin` ,formData /*, this.httpOptions*/);

     let body = new URLSearchParams();
     body.set('phone', user.phone);
     body.set('password', user.password);
     body.set('coordiantion', user.coordiantion);

    return  this.httpClient.post(`${this.API_BaseURL}/user/login_for_admin`,body.toString() ,this.httpOptions);
    
  }

  getVerificationCode(phone){
    
    let body = new URLSearchParams();
    body.set('phone', phone);
   
    // return this.http.post(`${this.API_BaseURL}/user/forget_password`, body.toString(), {headers: this.headers}).pipe(
    //   map(res =>  res) // or any other operator
    // );
    
    return  this.httpClient.post(`${this.API_BaseURL}/user/forget_password` ,body.toString(), this.httpOptions);
  }

  checkVerificationCode(phone, code): Observable<any>{
    let body = new URLSearchParams();
    body.set('phone', phone);
    body.set('code', code);
    body.set('device_id', "22222");
    
    return  this.httpClient.post(`${this.API_BaseURL}/user/verificate` ,body.toString(), this.httpOptions);
  }

  setPassword(newPassword): Observable<any>{
    let body = new URLSearchParams();
    body.set('password', newPassword.password);

    return  this.httpClient.post(`${this.API_BaseURL}/user/set_password` ,body.toString(),
    { headers: new HttpHeaders({ 'Content-Type': "application/x-www-form-urlencoded", token: newPassword.token , key: "1" }) });
  }

}

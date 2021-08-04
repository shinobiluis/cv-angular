import { ResponseLoginModel } from './../models/responseLogin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from './../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login( body:LoginUserModel ){
    const headers = { 'content-type': 'application/json'}
    return this.http.post<ResponseLoginModel>('http://api-cv.kame.house/api/login', body, {
      'headers': headers
    } );
    
  }
}

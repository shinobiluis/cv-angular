import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login( body:any ){
    console.log("info", body)
    const headers = { 'content-type': 'application/json'}
    return this.http.post<any>('http://api-cv.kame.house/api/login', body, {
      'headers': headers
    } );
  }
}

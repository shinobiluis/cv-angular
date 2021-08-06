import { CookieService } from 'ngx-cookie-service';
import { ResponseLoginModel } from './../models/responseLogin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from './../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( 
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  login( body:LoginUserModel ){
    const headers = { 'content-type': 'application/json'}
    return this.http.post<ResponseLoginModel>('http://api-cv.kame.house/api/login', body, {
      'headers': headers
    } );
    
  }

  logout(){
    // optener el token de acceso
    const token = this.cookieService.get('acess_token');
    const headers = { 
      'content-type': 'application/json', 
      'Authorization': `Bearer ${token}`
    }
    return this.http.get('http://api-cv.kame.house/api/logout', {
      'headers': headers
    });
  }
}

import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  guardarPerfil( body:any ){
    const token = this.cookieService.get('acess_token');
    console.log( token )
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    return this.http.post('http://api-cv.kame.house/api/profile/insert', body, {
      'headers': headers
    } );
  }

  consultarPerfil(){
    const token = this.cookieService.get('acess_token');
    console.log( token )
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    return this.http.get('http://api-cv.kame.house/api/profile', {
      'headers': headers
    } );
  }
}

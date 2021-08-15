import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadAvatarService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  upload( formData:any ){
    // optener el token de acceso
    const token = this.cookieService.get('acess_token');
    const headers = {  
      'Authorization': `Bearer ${token}`
    }
    console.log( "cuerpo ", formData );
    return this.http.post('http://api-cv.kame.house/api/profile/image', formData, {
      'headers': headers
    });
  }

  consultarAvatar(){
    const token = this.cookieService.get('acess_token');
    const headers = {  
      'Authorization': `Bearer ${token}`
    }
    return this.http.get('http://api-cv.kame.house/api/consult/avatar', {
      'headers': headers
    });
  }
}

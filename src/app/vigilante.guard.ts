import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor( 
    private cookieService: CookieService, 
    private router: Router 
  ){

  }

  redirect( flag: boolean ): any{
    if(!flag){
      this.router.navigate(['/', 'login'])
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // al ussar check la respuesta se vuelve true o false
    // se puede usar get para obtener el valor
    const cookie = this.cookieService.check('acess_token');
    console.log( "token", this.cookieService.get('acess_token') )
    this.redirect( cookie );
    // recuerta que cookie es true o false, si es true se muestra la pagina.
    return cookie;
  }
  
}

import { UploadAvatarService } from './../../services/upload-avatar.service';
import { AcutlizarAvatarFrontService } from './../../services/acutlizar-avatar-front.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: any[];
  public imageAvatar:any = null;
  constructor(
    private login: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private updateAvatar: AcutlizarAvatarFrontService,
    private avatar: UploadAvatarService
  ) { }

  ngOnInit(): void {
    this.updateAvatar.disparadorDeAvatar.subscribe( (data:any) =>{
      console.log("Recibiendo data...", data);
      this.imageAvatar = data;
    })
    this.avatar.consultarAvatar().subscribe( (response:any) =>{
      // console.log( 'consulta avatar', response );
      if( response != null ){
        this.imageAvatar = `data:image/png;base64, ${response.image}`;
        // console.log('Este es el avatar', this.imageAvatar)
      }
    })
    this.items = [
      {
        label: 'Salir', 
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.delete();
        }
      }
    ];
  }

  delete(): any {
    this.login.logout()
      .subscribe( (response: any) => {
        console.log( response )
        this.cookieService.delete('acess_token', '/');
        this.router.navigate(['login'])
      } );
  }

}

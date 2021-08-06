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
  constructor(
    private login: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

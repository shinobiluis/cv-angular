import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  public formLogin!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private login: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength( 6 )]]
    })
  }

  send(): any{
   
    console.log(this.formLogin.value);
    this.login.login( this.formLogin.value )
      .subscribe( (response: any) => {
        console.log(response)
        this.formLogin.reset();
        // le decimos al navegador que lo guarde por 4 dias y 
        // con el '/' le decimos que funciona para toda la aplicacion.
        this.cookieService.set('acess_token', response.acess_token, 4, '/');
        // redireccionamos al dash
        this.router.navigate(['dash'])
      })
  }

  get correoNoValido(): boolean{
    // retorna un true o false
    return this.formLogin.get('email')!.invalid && this.formLogin.get('email')!.touched;
  }

  get passwordNoValido(): boolean{
    // retorna un true o false
    return this.formLogin.get('password')!.invalid && this.formLogin.get('password')!.touched;
  }
 

}

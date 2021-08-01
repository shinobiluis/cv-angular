import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  public formLogin!: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength( 6 )]]
    })
  }

  send(): any{
    console.log(this.formLogin.value)
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

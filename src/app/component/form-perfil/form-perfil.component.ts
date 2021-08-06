import { PerfilService } from './../../services/perfil.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.css']
})
export class FormPerfilComponent implements OnInit {

  public formPerfil!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private perfil: PerfilService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.consultarPerfil();
  }

  crearFormulario(){
    this.formPerfil = this.formBuilder.group({
      names: ['', [Validators.required] ],
      surnames: ['', [Validators.required] ],
      phone: ['', [Validators.required] ],
      job_title: ['', [Validators.required] ]
    })
  }
  send(){
    console.log(this.formPerfil.value)
    this.perfil.guardarPerfil( this.formPerfil.value )
      .subscribe( response => {
        console.log( response )
      })
  }
  consultarPerfil(){
    this.perfil.consultarPerfil()
      .subscribe( (response: any) =>{
        console.log( response.data )
        this.actualizarFormulario( response.data )  
      })
  }
  actualizarFormulario( data: any ){
    this.formPerfil.reset({
      names: data.names,
      surnames: data.surnames,
      phone: data.phone,
      job_title: data.job_title,
    });
  }

}

import { PerfilService } from './../../services/perfil.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.css'],
  providers: [MessageService]
})
export class FormPerfilComponent implements OnInit {

  public formPerfil!: FormGroup;
  public email:string = '';
  constructor(
    private formBuilder: FormBuilder,
    private perfil: PerfilService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.consultarPerfil();
  }

  crearFormulario(){
    this.formPerfil = this.formBuilder.group({
      user_id: [''],
      names: ['', [Validators.required] ],
      surnames: ['', [Validators.required] ],
      phone: ['', [Validators.required] ],
      job_title: ['', [Validators.required] ]
    })
  }
  send(){
    console.log(this.formPerfil.value)
    if( this.formPerfil.value.user_id == ""){
      this.perfil.guardarPerfil( this.formPerfil.value )
        .subscribe( (response:any) => {
          console.log( response.data )
          this.actualizarFormulario( response.data )
          this.showSuccess();
        })
    }else{
      this.perfil.actualizarPerfil( this.formPerfil.value )
        .subscribe( response => {
          console.log( response )
          this.showSuccess();
        })
    }
    
  }
  consultarPerfil(){
    this.perfil.consultarPerfil()
      .subscribe( (response: any) =>{
        console.log( response.data )
        this.email = response.data.email;
        if( response.data.profile != null ){
          this.actualizarFormulario( response.data.profile )
        }
      })
  }
  actualizarFormulario( data: any ){
    this.formPerfil.reset({
      user_id: data.user_id,
      names: data.names,
      surnames: data.surnames,
      phone: data.phone,
      job_title: data.job_title,
    });
  }

  showSuccess() {
    this.messageService.add({
        severity:'success', 
        summary: 'Guardado', 
        detail: 'Perfil guardado correctamente'
      });
  }

}

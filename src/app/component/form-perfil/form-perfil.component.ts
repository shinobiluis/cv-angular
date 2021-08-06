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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
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
  }

}

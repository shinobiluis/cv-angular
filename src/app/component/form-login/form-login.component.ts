import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  public val1: string = '';
  public value: Date = new Date;
  public checked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

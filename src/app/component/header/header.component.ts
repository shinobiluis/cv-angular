import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: any[];
  constructor() { }

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
    alert("hola");
  }

}

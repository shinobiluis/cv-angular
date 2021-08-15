import { AcutlizarAvatarFrontService } from './../../services/acutlizar-avatar-front.service';
import { UploadAvatarService } from './../../services/upload-avatar.service';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  constructor(
    private avatar: UploadAvatarService,
    private updateAvatar: AcutlizarAvatarFrontService
  ) { }
  files: File[] = [];
  public avatarImage = './assets/avatar/avatar.png';
  public show:boolean = false;
  display: boolean = false;
  onSelect(event:any) {
    console.log('evento',event);
    this.show = true;
    this.files = []; // con esto logrcdamos que solo sea 1 archivo
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }
    console.log( 'cuerpo antes: ',formData );
    this.avatar.upload( formData )
      .subscribe((res:any) => {
        console.log(res);
        // 
        this.avatarImage = `data:image/png;base64, ${res.image}`;
        this.updateAvatar.disparadorDeAvatar.emit(this.avatarImage);
        console.log(this.avatarImage);
        this.show = false;
        this.display = false;
        this.files = [];
      });
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {

    this.avatar.consultarAvatar().subscribe( (response:any) =>{
      if( response != null ){
        // console.log( 'consulta avatar', response );
        this.avatarImage = `data:image/png;base64, ${response.image}`;
      }
      
    })
  }

  showDialog() {
    this.display = true;
  }

}

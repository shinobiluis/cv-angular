import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }
  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }

    console.log( formData );
    this.http.post('http://api-cv.kame.house/api/profile/image', formData)
    .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
    })

  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
  }

}

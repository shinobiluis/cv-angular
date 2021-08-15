import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(
    private sanitizer:DomSanitizer
  ){}
  transform(html:any){
    // return this.sanitizer.bypassSecurityTrustHtml(html);
    return this.sanitizer.bypassSecurityTrustResourceUrl(html)
  }

}

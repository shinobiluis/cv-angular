import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AcutlizarAvatarFrontService {
  @Output() disparadorDeAvatar: EventEmitter<any> = new EventEmitter()
  constructor() { }
}

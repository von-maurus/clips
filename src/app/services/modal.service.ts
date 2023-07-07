import { Injectable } from '@angular/core';


/**
 * This decorator is for making an injectable service
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible = false;

  constructor() { }
}

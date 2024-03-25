import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService] // you can import services on each component or in a "shared" module, its up to you!
})

export class ModalComponent implements OnInit {

  @Input() modalID = "";

  constructor(public modal: ModalService, public el: ElementRef) { }


  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    // throw new Error('Method not implemented.');
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }



}

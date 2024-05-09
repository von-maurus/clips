import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public modal: ModalService, public auth: AuthService, private ngAuth: AngularFireAuth) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  openModal($event: Event) {
    $event.preventDefault(); // prevents a default redirecting to another route.
    this.modal.toggleModal('auth');
  }

  async logout($event: Event) {
    $event.preventDefault(); // for not href navigation
    await this.ngAuth.signOut();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  credentials = {
    email: '',
    password: ''
  };

  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  showAlert = false;
  inSubmission = false;
  alertColor = 'yellow';
  alertMsg = 'Please wait! We are entering...';

  constructor(private auth: AngularFireAuth, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("se destruye")
  }

  async login(): Promise<any> {
    this.showAlert = true;
    this.inSubmission = true;
    this.alertColor = 'yellow';
    this.alertMsg = 'Please wait! We are entering...';
    try {
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    } catch (error) {
      this.alertMsg = 'An unexpected error occured, please try again.';
      this.alertColor = 'red';
      this.inSubmission = false;
      console.error(error);
      return;
    }
    this.alertColor = 'green';
    this.alertMsg = 'Login successfull, welcome!';
    this.inSubmission = false;
    this.modalService.toggleModal('auth');
    this.modalService.unregister('auth');
  }

}

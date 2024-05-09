import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';

import { UserModule } from './user/user.module';
import { environment } from 'src/environments/environment.development';

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqjGSmvVKwLKmz6y8-1_tVbYfoQtLc5Mc",
  authDomain: "angular-course-clip-01.firebaseapp.com",
  projectId: "angular-course-clip-01",
  storageBucket: "angular-course-clip-01.appspot.com",
  messagingSenderId: "1003206242061",
  appId: "1:1003206242061:web:6c79a269080034e78c8a44"
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

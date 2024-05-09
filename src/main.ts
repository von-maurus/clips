import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from './environments/environment.development';

firebase.initializeApp(environment.firebase);

let isFbAppInit = false;

firebase.auth().onAuthStateChanged(() => {
  if (!isFbAppInit) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
  isFbAppInit = true;
});
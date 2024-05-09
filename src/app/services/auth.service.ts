import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser> = this.db.collection('users');
  public isAuth$: Observable<boolean>;
  public isAuthWithDelay$: Observable<boolean>;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.isAuth$ = auth.user.pipe(map(user => !!user));
    this.isAuthWithDelay$ = this.isAuth$.pipe(delay(1000));
  }

  public async createUser(userData: IUser) {
    try {
      const credentials = await this.auth.createUserWithEmailAndPassword(userData.email as string, userData.password as string);
      console.log(credentials);

      if (!credentials.user) { throw new Error("User not found, please register with a valid email and try again."); }

      await this.usersCollection.doc(credentials.user.uid).set({
        name: userData.name,
        email: userData.email,
        age: userData.age,
        phone: userData.phone
      });

      await credentials.user.updateProfile({ displayName: userData.name })
    } catch (error) {
      console.error(error);
      return;
    }
  }
}

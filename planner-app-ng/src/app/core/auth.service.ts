import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import * as firebase from 'firebase/app';
import { FirebaseUserModel } from './user.model';
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  doRegister(value: FirebaseUserModel) {
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => reject(err))
    });
  }

}

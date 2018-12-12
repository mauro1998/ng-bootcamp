import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public fireAuth: AngularFireAuth) {}

  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err),
        );
    });
  }

  signIn(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err),
        );
    });
  }

  facebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.fireAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        },
      );
    });
  }

  googleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.fireAuth.auth.signInWithPopup(provider).then(res => {
        resolve(res);
      });
    });
  }
}

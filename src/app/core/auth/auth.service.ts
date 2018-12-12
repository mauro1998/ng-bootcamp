import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthState, AuthUserData } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: Observable<AuthState>;

  constructor(public fireAuth: AngularFireAuth) {
    this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    this.authState = this.setAuthState();
  }

  setAuthState(): Observable<AuthState> {
    return this.fireAuth.authState.pipe(
      map(state => {
        if (!state) {
          return { authenticated: false, data: null };
        }

        return {
          authenticated: true,
          data: {
            name: state.displayName,
            email: state.email,
            photoUrl: state.providerData[0].photoURL
          }
        };
      })
    );
  }

  signUp(user: AuthUserData) {
    return from(
      this.fireAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      )
    ).pipe(
      switchMap((response: firebase.auth.UserCredential) => {
        return from(
          response.user.updateProfile({
            displayName: user.name,
            photoURL: ''
          })
        );
      })
    );
  }

  signIn(user: AuthUserData) {
    return from(
      this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    );
  }

  signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return from(this.fireAuth.auth.signInWithPopup(provider));
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    return from(this.fireAuth.auth.signInWithPopup(provider));
  }

  signOut() {
    return from(this.fireAuth.auth.signOut());
  }

  get authenticated(): Observable<boolean> {
    return this.authState.pipe(map(state => state.authenticated));
  }
}

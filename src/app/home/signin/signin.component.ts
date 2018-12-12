import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  processing = false;
  redirecting = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  showSnackBar(message: string, duration = 8000) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration
    });
  }

  signIn(value) {
    this.processing = true;
    this.authService
      .signIn(value)
      .pipe(
        catchError(err => {
          this.processing = false;
          return of(err);
        })
      )
      .subscribe(res => {
        if (res && res.message) {
          if (res.code === 'auth/user-not-found') {
            this.showSnackBar(
              'User not found. Please make sure you entered valid credentials'
            );
          } else {
            this.showSnackBar(res.message);
          }
        } else {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  signInGoogle() {
    this.processing = true;
    this.authService
      .signInWithGoogle()
      .pipe(
        catchError(err => {
          this.processing = false;
          return of(err);
        })
      )
      .subscribe(res => {
        if (res && res.message) {
          this.showSnackBar(res.message);
        } else {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}

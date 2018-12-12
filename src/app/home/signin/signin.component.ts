import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  processing = false;
  redirecting = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  showSnackBar(message: string, duration = 8000) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration,
    });
  }

  signIn(value) {
    this.processing = true;
    this.authService.signIn(value).then(
      res => {
        console.log(res);
        this.redirecting = true;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      },
      err => {
        console.log(err);
        if (err.code === 'auth/user-not-found') {
          this.showSnackBar(
            'User not found. Please make sure you entered valid credentials',
          );
        } else {
          this.showSnackBar(err.message);
        }

        this.processing = false;
      },
    );
  }

  signInGoogle() {
    this.processing = true;
    this.authService.googleLogin().then(
      res => {
        console.log(res);
        this.redirecting = true;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      },
      err => {
        console.log(err);
        this.showSnackBar(err.message);
        this.processing = false;
      },
    );
  }

  signInFacebook() {
    this.processing = true;
    this.authService.facebookLogin().then(
      res => {
        console.log(res);
        this.redirecting = true;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      },
      err => {
        console.log(err);
        this.showSnackBar(err.message);
        this.processing = false;
      },
    );
  }
}

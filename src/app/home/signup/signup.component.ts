import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  processing = false;
  redirecting = false;

  registerForm: FormGroup = this.formBuilder.group({
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

  register(value) {
    this.processing = true;
    this.authService.register(value).then(
      res => {
        console.log(res);
        this.redirecting = true;
        this.showSnackBar('Your account has been successfully created', 3000);
        setTimeout(() => this.router.navigate(['/dashboard']), 4000);
      },
      err => {
        console.log(err);
        this.showSnackBar(err.message);
        this.processing = false;
      },
    );
  }
}

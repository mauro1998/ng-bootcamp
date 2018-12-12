import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { AuthUserData } from 'src/app/core/auth/auth.interface';
import { catchError, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy {
  processing = false;
  redirecting = false;
  unsubscribe$ = new Subject();

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
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

  register(form) {
    this.processing = true;
    const user: AuthUserData = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    this.authService
      .signUp(user)
      .pipe(
        catchError(err => {
          this.processing = false;
          return of(err);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res: any) => {
        if (res && res.message) {
          return this.showSnackBar(res.message);
        }

        this.redirecting = true;
        this.showSnackBar('Your account has been successfully created', 2000);
        setTimeout(() => this.router.navigate(['/dashboard']), 3000);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

interface Link {
  text: string;
  action: Function;
  hidden: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'HR';
  links$: Observable<Link[]>;

  constructor(
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.links$ = this.auth.authenticated.pipe(
      map(authenticated => {
        return [
          {
            text: 'SIGN IN',
            action: this.navigate.bind(this, '/home/signin'),
            hidden: authenticated
          },
          {
            text: 'SIGN UP',
            action: this.navigate.bind(this, '/home/signup'),
            hidden: authenticated
          },
          {
            text: 'SIGN OUT',
            action: this.signOut.bind(this),
            hidden: !authenticated
          }
        ];
      })
    );
  }

  signOut() {
    this.auth
      .signOut()
      .pipe(catchError(err => of(err)))
      .subscribe(err => {
        if (err) {
          return this.showSnackBar(err.message);
        }

        this.navigate('/home');
      });
  }

  showSnackBar(message: string, duration = 5000) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}

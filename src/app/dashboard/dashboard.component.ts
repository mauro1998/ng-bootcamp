import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { AuthUserData } from '../core/auth/auth.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<AuthUserData>;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.user$ = this.auth.authState.pipe(map(state => state.data));
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}

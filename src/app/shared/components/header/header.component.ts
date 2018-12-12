import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'HR';
  links: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.links = [
      {
        text: 'SIGN IN',
        route: '/home/signin',
      },
      {
        text: 'SIGN UP',
        route: '/home/signup',
      },
      {
        text: 'SIGN OUT',
        route: '/home/signin',
      },
      {
        text: 'DASHBOARD',
        route: '/dashboard',
      },
    ];
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}

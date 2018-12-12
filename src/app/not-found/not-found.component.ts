import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, of } from 'rxjs';
import { last, map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  countdown$: Observable<number>;
  timeout = 3;

  constructor(public router: Router) {}

  ngOnInit() {
    this.countdown$ = interval(1000).pipe(
      map(i => this.timeout - i),
      take(this.timeout + 1)
    );

    this.countdown$
      .pipe(
        last(),
        switchMap(() => of(['/']))
      )
      .subscribe(route => this.router.navigate(route));
  }
}

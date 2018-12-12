import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  handleAuth(path: string): Observable<boolean> {
    switch (path) {
      case 'home': {
        return this.auth.authenticated.pipe(
          map(authenticated => {
            if (authenticated) {
              this.router.navigate(['/dashboard']);
              return false;
            }

            return true;
          })
        );
      }

      default: {
        return this.auth.authenticated.pipe(
          tap(authenticated => {
            if (!authenticated) {
              this.router.navigate(['/home']);
            }
          })
        );
      }
    }
  }

  canLoad(route: Route): Observable<boolean> {
    return this.handleAuth(route.path);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (/home/g.test(state.url)) {
      return this.handleAuth('home');
    }

    return this.handleAuth('dashboard');
  }
}

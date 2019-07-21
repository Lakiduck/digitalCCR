import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {take, map, tap} from 'rxjs/operators'
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthStateService, private router: Router){

    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.fireAuth.authState.pipe(take(1), map(authState => !!authState), tap(authenticated => {
            if (!authenticated){
              let err = 101;
              this.router.navigate(['/login', err]);
            }
          }));
  }
}

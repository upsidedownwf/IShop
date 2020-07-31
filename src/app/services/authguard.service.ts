import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'angularx-social-login';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
user$: Observable<any>;
  constructor(private OAuth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    this.user$= this.OAuth.authState;
    return this.user$.pipe(
      map(x=>
        {
          if(x) return true;
          else{
            this.router.navigate(['/login'],
              {queryParams: {returnUrl: state.url}}
            );
              return false;
          }
        }
        )
    )
    
  }
}

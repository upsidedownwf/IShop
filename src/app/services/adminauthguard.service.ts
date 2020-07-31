import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SocialauthService } from './socialauth.service';
import { AuthService } from 'angularx-social-login';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private socialauth: SocialauthService,private router: Router, private OAuth: AuthService) {
   
   }
   canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return this.socialauth.getCurrentUserRole().pipe(map(x=> {
            if(x.roleID=="1"){
            return true;
           }
           else{
            this.router.navigate(['/'],
             {queryParams: {returnUrl: state.url}});
           return false;
          }}));

      }
    
     
}

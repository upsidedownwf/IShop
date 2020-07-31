import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider,  SocialUser } from 'angularx-social-login';
import { SocialloginService } from '../services/sociallogin.service';
import { User } from '../classes/user';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialauthService {
 user= new User(); 
  response;
  soething;
  constructor(
    private OAuth: AuthService,
    private SocialloginService: SocialloginService, private route: ActivatedRoute,
    private router: Router
  ) { }

  login(socialProvider: string): void{
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID; 
      this.soething= socialPlatformProvider; 
    } else if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
      this.soething= socialPlatformProvider;
    }  
   this.OAuth.signIn(socialPlatformProvider).then((socialusers: SocialUser) => {  
     
      // console.log(socialProvider, socialusers);  
      // console.log(socialusers);
      let value= new User();
      value.email= socialusers.email;
      value.firstName= socialusers.firstName;
      value.lastName= socialusers.lastName;
      value.referenceId= socialusers.id;
      value.provider= socialusers.provider;
      if(socialusers.provider=="GOOGLE"){
      value.imageUrl= socialusers.photoUrl;
      }
      else if (socialusers.provider=="FACEBOOK"){
        value.imageUrl= socialusers.facebook.picture.data.url;
      }
      this.Savesresponse(value);   
    }); 
     
}
Savesresponse(socialusers: User) {  
  this.SocialloginService.post(socialusers).subscribe((res: any) => {  
    //debugger;  
    //console.log(res);  
     
    this.user=res;  
    this.response = res.userDetail;  
    let role= res.roleID;
    localStorage.setItem('socialusers', JSON.stringify(res));
    sessionStorage.setItem('role', role);
    const returnUrl = this.route.snapshot.queryParams.returnUrl;
    this.router.navigate([returnUrl || '/']);
  },
  err=>{
    localStorage.removeItem('socialusers');
    //alert(this.soething);
    this.OAuth.signOut(this.soething);
  })  
} 

getCurrentUserRole(){
  return this.OAuth.authState.pipe(switchMap(res=> 
       {
         if (res) return this.SocialloginService.getById(res.id);
         else return of(null);
        }));
}

logout() {  
  this.OAuth.signOut().then(data => {  
    //debugger;  
    this.router.navigate([`/login`]);  
  }).finally(()=>{
    sessionStorage.clear();}
  );  
}   
}

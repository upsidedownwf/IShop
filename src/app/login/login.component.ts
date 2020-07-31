import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider,  SocialUser } from 'angularx-social-login';
import { SocialloginService } from '../services/sociallogin.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { SocialauthService } from '../services/socialauth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private socialauth: SocialauthService ) {
   // OAuth.authState.subscribe(x=> console.log(x));
   }
  soething;
  ngOnInit() {
  }
  login(socialProvider: string): void{
      this.socialauth.login(socialProvider);
  }
 

}

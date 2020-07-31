import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { SocialauthService } from '../services/socialauth.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userinfo$:Observable<any>;
  userrole;
  constructor(private OAuth: AuthService, private socialauth: SocialauthService) {
   }

  ngOnInit() {  
    // this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    // console.log(this.socialusers.image); 
    this.socialauth.getCurrentUserRole().subscribe(x=> {this.userrole= x; console.log('userdetails is ', x);}); 
  }  
 
  logout() {  
    this.socialauth.logout();
  }  

}

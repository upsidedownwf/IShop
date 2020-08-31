import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Observable, of, defer } from 'rxjs';
import { SocialauthService } from '../services/socialauth.service';
import {map} from 'rxjs/operators';
import { ShoppingcartserviceService } from '../services/shoppingcartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userinfo$:Observable<any>;
  userrole;
  quantity:number=0;
  constructor(private OAuth: AuthService, private socialauth: SocialauthService, private cart: ShoppingcartserviceService) {
   }

  async ngOnInit() {  
    // this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    // console.log(this.socialusers.image); 
    this.socialauth.getCurrentUserRole().subscribe(x=> {this.userrole= x; console.log('userdetails is ', x);}); 
    const ikeja=await this.cart.getCart()
    ikeja.subscribe((x)=> {
    for(var i=0; i<x.length;i++){
      this.quantity += (<number>x[i].qty);}
     })
  }  
  logout() {  
    this.socialauth.logout();
  }  

}

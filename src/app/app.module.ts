import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { ProductformComponent } from './admin/productform/productform.component';

const config = new AuthServiceConfig(  
  [  
    {  
      id: FacebookLoginProvider.PROVIDER_ID,  
      provider: new FacebookLoginProvider('181468083066960')  
    },  
    {  
      id: GoogleLoginProvider.PROVIDER_ID,  
      provider: new GoogleLoginProvider('550727511534-qb7h3gi7nrncftohq7l4vel5ilgcaat2.apps.googleusercontent.com')  
    }  
  ]  
);  
 
 export function provideConfig() {
  return config;
 }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    AdminproductsComponent,
    AdminordersComponent,
    LoginComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

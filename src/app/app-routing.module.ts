import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AuthguardService } from './services/authguard.service';
import { AdminauthguardService } from './services/adminauthguard.service';
import { ProductformComponent } from './admin/productform/productform.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},

  {path:'checkout', component:CheckoutComponent, canActivate:[AuthguardService]},
  {path:'order-success', component:OrderSuccessComponent, canActivate:[AuthguardService]},
  {path:'orders', component:MyordersComponent, canActivate:[AuthguardService]},
  
  {path:'admin/products/new', component:ProductformComponent, canActivate:[AuthguardService, AdminauthguardService]},
  {path:'admin/products/:id', component:ProductformComponent, canActivate:[AuthguardService, AdminauthguardService]},
  {path:'admin/products', component:AdminproductsComponent, canActivate:[AuthguardService, AdminauthguardService]},
  {path:'admin/orders', component:AdminordersComponent, canActivate:[AuthguardService, AdminauthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

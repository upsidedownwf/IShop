import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartserviceService } from '../services/shoppingcartservice.service';

@Component({
  selector: 'productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent {
@Input("product") product;
@Input("addcart") showAdd= true;
@Input("shopping-cart") cart;
  constructor(public shopcart: ShoppingcartserviceService) { }

  addToCart(p){
    this.shopcart.addtocart(p);
  }
  getquantity(){
    if(!this.cart) return 0;
    return this.shopcart.getQuantity(this.product);
  }
}

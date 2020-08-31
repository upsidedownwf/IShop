import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartserviceService } from '../services/shoppingcartservice.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent {
@Input("product") product;
@Input("addcart") showAdd= true;
@Input("shoppingcart") cart;
  constructor(public shopcart: ShoppingcartserviceService) {
 }

  addToCart(){
    this.shopcart.addtocart(this.product);
  }
  removeFromCart(){
    this.shopcart.reduceQuantity(this.product);
  }
  getquantity(){
    if(typeof this.cart=== "undefined") return 0;
    let item= this.cart.find(x=>x.id==this.product.id)
    return item? item.qty:0;
  }
}

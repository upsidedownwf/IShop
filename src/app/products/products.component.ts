import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingcartserviceService } from '../services/shoppingcartservice.service';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
products: any;
filteredproducts;
categories;
category ;
cart:any;
sub:Subscription
  constructor(public product: ProductService,public categorys: CategoriesService, public route: ActivatedRoute,
    private shopcart: ShoppingcartserviceService
    ) {
    product.Get.pipe(switchMap(x=> {
      this.products=x;
      return this.route.queryParams
    }))
    .subscribe(z=> 
      {
        this.category= z.category;
        console.log("z.name is", z.category);
       this.filteredproducts=  (this.category)? this.products.filter(y=> y.categoryName==this.category): this.products;
      });

    this.categories= categorys.Get;
  }
 async ngOnInit() {
    this.sub=(await this.shopcart.getCart()).subscribe(x=> this.cart=x);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  

}

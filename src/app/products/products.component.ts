import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products: any;
filteredproducts: any;
categories;
category ;
  constructor(public product: ProductService,public categorys: CategoriesService, public route: ActivatedRoute) {
      
  }

  ngOnInit() {
    this.product.Get.pipe(switchMap(x=> {
      this.products=x;
      return this.route.queryParams
    }))
    .subscribe(z=> 
      {
        this.category= z.category;
        console.log("z.name is", z.category);
       this.filteredproducts=  (this.category)? this.products.filter(y=> y.categoryName==this.category): this.products;
      });

    this.categories= this.categorys.Get;
  }

}

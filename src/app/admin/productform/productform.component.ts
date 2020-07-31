import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
categories$;
products={};
id;
  constructor(private categories: CategoriesService, private product: ProductService,
     private router: Router, private route: ActivatedRoute) {
     this.id= this.route.snapshot.params.id;
      if(this.id) this.product.getById(this.id).subscribe(x=>this.products= x);
      }

  ngOnInit() {
      this.categories.Get.subscribe(x=> this.categories$= x);
  }

  submit(value){
    if(this.id){
      console.log('updateproduct form is: ', JSON.stringify(value));
        this.product.Put(this.id,value).subscribe(x=> this.router.navigate(['admin/products']));
    }
    else{
    this.product.post(value).subscribe(x=>  this.router.navigate(['admin/products']));
    }
   
  }
  delete(){
    if(!confirm("Are you sure you want to delete?"))return;
      this.product.delete(this.id).subscribe(x=>  this.router.navigate(['admin/products']));
  }
}

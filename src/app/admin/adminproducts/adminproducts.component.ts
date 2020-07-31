import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {DataTableResource} from 'angular-4-data-table';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.scss']
})
export class AdminproductsComponent implements OnInit {
product$: any;
filteredproducts:any;
tableResource:DataTableResource<any>
  constructor(private data: ProductService) { }

  ngOnInit() {
    this.data.Get.subscribe(x=> {
      this.filteredproducts=this.product$= x;
  
  });
  }
  
  query(query: string){
    this.filteredproducts= (query)? this.product$.filter(x=> x.title.toLowerCase().includes(query.toLowerCase())): this.product$;
    
}


}

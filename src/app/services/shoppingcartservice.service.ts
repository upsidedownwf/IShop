import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartserviceService {
cartid:string;
  constructor() { }
 
 private generateid(length=6):string {return Math.random().toString(20).substring(3,length);}
 public getcartid(){ 
  this.cartid= localStorage.getItem("cid");

  if(this.cartid== null || typeof(this.cartid)=== "object"){
    this.cartid= this.generateid(14);
    let cid= this.cartid;
    localStorage.setItem("cid", cid);
  }
  var cartidid= this.cartid
  return this.cartid;
}
public  addtocart(product){
  this.getcartid();
  var prodarr =JSON.parse(localStorage.getItem("cims"));
      if(typeof(prodarr)==="object" && prodarr== null){
       var prodobj={id:product.id, products:product, qty:1};
       prodarr=[];
       prodarr.push(prodobj)
       this.getCart()
       localStorage.setItem("cims",JSON.stringify(prodarr));
      }
      else{
         prodobj=prodarr.find(x=>x.id== product.id);
         if(prodobj != null)
          {
            console.log("yes")
           prodobj.qty++;
           //var index= prodarr.indexOf(product);
           //prodarr.splice(index,1, prodobj);
      this.getCart()
           localStorage.setItem("cims",JSON.stringify(prodarr));
          }
         else{
          console.log("no")
          prodobj={id:product.id, products:product, qty:1};
          prodarr.push(prodobj)
          this.getCart()
          localStorage.setItem("cims",JSON.stringify(prodarr));
         }

        }
      }
  public getQuantity(product){
    var prodarrss =JSON.parse(localStorage.getItem("cims"));
    let prodobj=prodarrss.find(x=>x.id== product.id);
    return prodobj? prodobj.qty:0;
  }

  public reduceQuantity(product){
    var prodarrss =JSON.parse(localStorage.getItem("cims"));
    let prodobj=prodarrss.find(x=>x.id== product.id);
    if (prodobj != null){
      if((prodobj.qty)==0){
        prodarrss.splice(prodarrss.indexOf(prodobj),1)
        console.log("quantity zero ",typeof(prodarrss))
      }
      else{
        prodobj.qty--;
        if(prodobj.qty == 0)prodarrss.splice(prodarrss.indexOf(prodobj),1)
      }
      this.getCart()
      localStorage.setItem("cims",JSON.stringify(prodarrss));
    }
  }
  getmyguy(){
    return of(JSON.parse(localStorage.getItem("cims")));
  }
  public getCart():Promise<Observable<any>>{
     return new Promise((resolve, reject)=>{
      resolve(this.getmyguy()), reject([])
  });
  }
}


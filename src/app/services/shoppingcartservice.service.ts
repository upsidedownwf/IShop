import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartserviceService {
cartid:string
  constructor() { }
 
 private generateid(length=6):string {return Math.random().toString(20).substring(3,length);}
 public getcartid(){ 
  this.cartid= localStorage.getItem("cid");
  console.log("typeof(cartid)",typeof(this.cartid))

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
  console.log("typeof(prodarr)",typeof(prodarr))
  console.log("typeof(prodarr)",prodarr)
      if(typeof(prodarr)==="object" && prodarr== null){
       var prodobj={id:product.id, products:product, qty:1};
       prodarr=[];
       prodarr.push(prodobj)
       localStorage.setItem("cims",JSON.stringify(prodarr));
      }
      else{
         prodobj=prodarr.find(x=>x.id== product.id);
         if(prodobj != null)
          {
            console.log("yes")
           prodobj.qty++;
           var index= prodarr.indexOf(product);
           //prodarr.splice(index,1, prodobj);
           localStorage.setItem("cims",JSON.stringify(prodarr));
          }
         else{
          console.log("no")
          prodobj={id:product.id, products:product, qty:1};
          prodarr.push(prodobj)
          localStorage.setItem("cims",JSON.stringify(prodarr));
         }

        }
      }
  public getQuantity(product){
    var prodarrss =JSON.parse(localStorage.getItem("cims"));
    let prodobj=prodarrss.find(x=>x.id== product.id);
    return prodobj? prodobj.qty:0;
  }
}


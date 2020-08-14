import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private url: string) { }
  
 get Get(){
  const header:HttpHeaders= new HttpHeaders()
  header.set("X-Pagination",JSON.stringify({"weight":124, "height":56}))
  var waso= {headers: header};
    return this.http.get(this.url);
  }
  post(value){
    return this.http.post(this.url, value);
  }

  getById(id){
    return this.http.get(this.url + '/' + id);
  }
  Put(id,value) {
      return this.http.put(this.url + '/' + id, value);
  }
  delete(id){
    return this.http.delete(this.url + '/' + id);
  }
}

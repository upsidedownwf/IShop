import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends DataService{

  constructor(http:HttpClient) {
    super(http, "http://localhost:37557/api/categories");
  }
}

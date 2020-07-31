import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService extends DataService{

  constructor(http: HttpClient) {
    super(http,"http://localhost:37557/api/sociallogin");
  }
}

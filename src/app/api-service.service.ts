import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private productUrl = 'https://reqres.in/api/products';  
  constructor(private http: HttpClient) { }

  public getProductData(): Observable<any> {
    return this.http.get(this.productUrl);
  }
}

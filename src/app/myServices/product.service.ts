import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ProductService {
  address : string = 'https://upb-angularcertificationii.firebaseio.com/products.json';

  constructor(private http : HttpClient) {

   }
  
  public getProducts(): Observable<any> {
    return this.http.get(this.address);
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post(this.address, product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://upb-angularcertificationii.firebaseio.com/products/${id}.json`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`https://upb-angularcertificationii.firebaseio.com/products/${id}.json`, product);
  }
}
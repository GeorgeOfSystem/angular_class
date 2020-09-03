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
  
  /*Create Product
  postProducts( product : any ) : Observable<any> {
    return this.http.post(this.address,product);
  }*/

  //Read Product
  getProducts() : Observable<any>{
    return this.http.get(this.address);
  }

  /*//Update Product
  updateProducts( product : any ) : Observable<any> {
    return this.http.put(this.address,product);
  }

  //Delete Product
  deleteProducts( product : any ) : Observable<any> {
    return this.http.delete(this.address,product);
  }*/
}
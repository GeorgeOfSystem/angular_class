import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class PersonService {
address : string = 'https://electionss-test.firebaseio.com/persons.json';

  constructor(private http : HttpClient) {

   }
  
  public getProducts(): Observable<any> {
    return this.http.get(this.address);
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post(this.address, product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://electionss-test.firebaseio.com/persons/%7bid%7d`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`https://electionss-test.firebaseio.com/persons/%7bid%7d`, product);
  }
}
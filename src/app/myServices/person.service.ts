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
  
  public getPerson(): Observable<any> {
    return this.http.get(this.address);
  }

  public addPerson(person: any): Observable<any> {
    return this.http.post(this.address, person);
  }

  public deletePerson(id: any): Observable<any> {
    return this.http.delete(`https://electionss-test.firebaseio.com/persons/${id}.json`);
  }

  public updatePerson(id: any, person: any): Observable<any> {
    return this.http.put(`https://electionss-test.firebaseio.com/persons/${id}.json`, PaymentResponse);
  }
}
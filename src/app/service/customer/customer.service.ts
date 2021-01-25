import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customers } from 'src/app/model/Customers';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }


  public getCustomers():Observable<any>{
    return this.http.get("http://localhost:8080/customer/get-customers");
  }


  public createCustomer(customer):Observable<any>{
   return this.http.post("http://localhost:8080/customer/create-customer",customer)
  }
}

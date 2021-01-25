import { Component, OnInit } from '@angular/core';
import {CustomerService} from "src/app/service/customer.service";
import { Customers } from 'src/app/model/Customers';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers=Array<Customers>();

  constructor(public customerService:CustomerService) { }


  ngOnInit() {

    this.customerService.getCustomers().subscribe(data =>{
      this.customers=data;
      console.log(this.customers);
    });
  }

}

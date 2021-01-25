import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, FormArray } from '@angular/forms';
import {CustomerService} from "src/app/service/customer.service";
import { Customers } from 'src/app/model/Customers';
import { Phone } from 'src/app/model/Customers';

@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css']
})
export class CreateCustomersComponent implements OnInit {

  customerForm:FormGroup;
  phones:FormArray;
  customer;
  successfull;

  constructor(public customerService:CustomerService,public fb: FormBuilder) { 
    this.customerForm=this.fb.group({
      firstName: '',
    lastName: '',
    phoneNumber:this.fb.array([
      new FormControl(''),
      new FormControl('')
    ])
    });

  }

  ngOnInit() {
    
   this.customer=new Customers("","","");
  }

  public createCustomer(){
   console.log( this.customerForm.value);

   
   for(const key in this.customerForm.value){
    
    this.customer[key] = this.customerForm.value[key];
     
   }
  // this.phones=this.customerForm.get('phoneNumber') as FormArray;
   
   //for (let i = 0; i < this.phones.length; i++) {
   // console.log(this.phones.at(i).value);
  //}
     this.customerService.createCustomer(this.customer).subscribe(
       (res) => this.successfull="you have create the customer successfully"
     );
  }

}

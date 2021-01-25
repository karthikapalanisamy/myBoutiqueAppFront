import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BlouseMeasurementsComponent } from './Measurements/blouse-measurements/blouse-measurements.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListCustomersComponent,
    CreateCustomersComponent,
    BlouseMeasurementsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

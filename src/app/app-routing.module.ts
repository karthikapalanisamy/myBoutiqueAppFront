import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { CreateCustomersComponent } from './customers/create-customers/create-customers.component';
import { BlouseMeasurements } from './model/Customers';
import { PantMeasurementsComponent } from './Measurements/pant-measurements/pant-measurements.component';
import { BlouseMeasurementsComponent } from './Measurements/blouse-measurements/blouse-measurements.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path: 'list-customers', component: ListCustomersComponent},
  {path: 'create-customers', component: CreateCustomersComponent},
  {path:'blouse-measurements',component: BlouseMeasurementsComponent},
  {path:'pant-measurements',component: PantMeasurementsComponent},
  {path:'menu',component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
const materialComponent=[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  FormsModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatMenuModule
];

@NgModule({
  imports: [
    materialComponent
  ],
  exports:[materialComponent]
})
export class MaterialModule { }

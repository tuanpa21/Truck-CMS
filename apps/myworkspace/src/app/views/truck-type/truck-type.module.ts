import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TruckTypeRoutingModule } from './truck-type-routing.module';
import { TypeDetailComponent } from './type-detail/type-detail.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { TypeIndexComponent } from './type-index/type-index.component';
import { TypeNewComponent } from './type-new/type-new.component';

@NgModule({
  declarations: [
    TypeIndexComponent, 
    TypeNewComponent, 
    TypeEditComponent, 
    TypeDetailComponent,
    TruckTypeRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class TruckTypeModule { }

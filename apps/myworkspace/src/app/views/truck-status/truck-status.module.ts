import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckStatusRoutingModule } from './truck-status-routing.module';
import { StatusIndexComponent } from './status-index/status-index.component';
import { StatusEditComponent } from './status-edit/status-edit.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';

@NgModule({
  declarations: [StatusIndexComponent, StatusEditComponent, StatusDetailComponent],
  imports: [
    CommonModule,
    TruckStatusRoutingModule
  ]
})
export class TruckStatusModule { }

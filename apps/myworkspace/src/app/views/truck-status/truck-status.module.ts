import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../core/module/shared.module';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusEditComponent } from './status-edit/status-edit.component';
import { StatusIndexComponent } from './status-index/status-index.component';
import { StatusNewComponent } from './status-new/status-new.component';
import { TruckStatusRoutingModule } from './truck-status-routing.module';

@NgModule({
  declarations: [StatusIndexComponent, StatusEditComponent, StatusDetailComponent, StatusNewComponent],
  imports: [
    CommonModule,
    TruckStatusRoutingModule,
    SharedModule
  ]
})
export class TruckStatusModule { }

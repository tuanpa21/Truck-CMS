import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../core/module/shared.module';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverIndexComponent } from './driver-index/driver-index.component';
import { DriverNewComponent } from './driver-new/driver-new.component';
import { DriverRoutingModule } from './driver-routing.module';

@NgModule({
  declarations: [DriverIndexComponent, DriverEditComponent, DriverDetailComponent, DriverNewComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    SharedModule
  ]
})
export class DriverModule { }

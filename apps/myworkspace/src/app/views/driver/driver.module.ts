import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverIndexComponent } from './driver-index/driver-index.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverNewComponent } from './driver-new/driver-new.component';

@NgModule({
  declarations: [DriverIndexComponent, DriverEditComponent, DriverDetailComponent, DriverNewComponent],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }

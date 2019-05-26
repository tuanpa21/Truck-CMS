import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckRoutingModule } from './truck-routing.module';
import { TruckIndexComponent } from './truck-index/truck-index.component';
import { TruckEditComponent } from './truck-edit/truck-edit.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { SharedModule } from '../../core/module/shared.module';
import { TruckNewComponent } from './truck-new/truck-new.component';

@NgModule({
  declarations: [TruckIndexComponent, TruckEditComponent, TruckDetailComponent, TruckNewComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    SharedModule
  ]
})
export class TruckModule { }

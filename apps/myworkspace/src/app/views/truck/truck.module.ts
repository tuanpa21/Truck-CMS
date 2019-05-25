import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckRoutingModule } from './truck-routing.module';
import { TruckIndexComponent } from './truck-index/truck-index.component';
import { TruckEditComponent } from './truck-edit/truck-edit.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { SharedModule } from '../../core/module/shared.module';

@NgModule({
  declarations: [TruckIndexComponent, TruckEditComponent, TruckDetailComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    SharedModule
  ]
})
export class TruckModule { }

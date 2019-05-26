import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../core/module/shared.module';
import { CargoDetailComponent } from './cargo-detail/cargo-detail.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';
import { CargoIndexComponent } from './cargo-index/cargo-index.component';
import { CargoTypeRoutingModule } from './cargo-type-routing.module';
import { CargoNewComponent } from './cargo-new/cargo-new.component';

@NgModule({
  declarations: [CargoEditComponent, CargoIndexComponent, CargoDetailComponent, CargoNewComponent],
  imports: [
    CommonModule,
    CargoTypeRoutingModule,
    SharedModule
  ]
})
export class CargoTypeModule { }

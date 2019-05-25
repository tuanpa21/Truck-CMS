import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoTypeRoutingModule } from './cargo-type-routing.module';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';
import { CargoIndexComponent } from './cargo-index/cargo-index.component';
import { CargoDetailComponent } from './cargo-detail/cargo-detail.component';

@NgModule({
  declarations: [CargoEditComponent, CargoIndexComponent, CargoDetailComponent],
  imports: [
    CommonModule,
    CargoTypeRoutingModule
  ]
})
export class CargoTypeModule { }

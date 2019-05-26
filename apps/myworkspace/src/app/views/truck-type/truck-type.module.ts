import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeIndexComponent } from './type-index/type-index.component';
import { TypeNewComponent } from './type-new/type-new.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { TypeDetailComponent } from './type-detail/type-detail.component';

@NgModule({
  declarations: [TypeIndexComponent, TypeNewComponent, TypeEditComponent, TypeDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TruckTypeModule { }

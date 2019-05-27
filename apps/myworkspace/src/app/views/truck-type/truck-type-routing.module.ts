import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypeDetailComponent } from './type-detail/type-detail.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { TypeIndexComponent } from './type-index/type-index.component';
import { TypeNewComponent } from './type-new/type-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/status/index'
  },
  {
    path: 'index',
    component: TypeIndexComponent,
    data: { title: 'Truck Type Index' }
  },
  {
    path: 'detail',
    component: TypeDetailComponent,
    data: { title: 'Truck Type Detail' }
  },
  {
    path: 'new',
    component: TypeNewComponent,
    data: { title: 'New Truck Type' }
  },  
  {
    path: 'edit/:id',
    component: TypeEditComponent,
    data: { title: 'Edit Truck Type' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckTypeRoutingModule { }

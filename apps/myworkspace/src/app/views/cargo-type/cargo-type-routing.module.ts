import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoDetailComponent } from './cargo-detail/cargo-detail.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';
import { CargoIndexComponent } from './cargo-index/cargo-index.component';
import { CargoNewComponent } from './cargo-new/cargo-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cargo-type/index'
  },
  {
    path: 'index',
    component: CargoIndexComponent,
    data: { title: 'Cargo Type Index' }
  },
  {
    path: 'detail/:id',
    component: CargoDetailComponent,
    data: { title: 'Cargo Type Detail' }
  },
  {
    path: 'new',
    component: CargoNewComponent,
    data: { title: 'New Cargo Type' }
  },  
  {
    path: 'edit/:id',
    component: CargoEditComponent,
    data: { title: 'Edit Cargo Type' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoTypeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoIndexComponent } from './cargo-index/cargo-index.component';
import { CargoDetailComponent } from './cargo-detail/cargo-detail.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';

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
    path: 'detail',
    component: CargoDetailComponent,
    data: { title: 'Cargo Type Detail' }
  },
  {
    path: 'new',
    component: CargoEditComponent,
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

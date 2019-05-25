import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckIndexComponent } from './truck-index/truck-index.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { TruckEditComponent } from './truck-edit/truck-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index'
  },
  {
    path: 'index',
    component: TruckIndexComponent,
    data: { title: 'Trucks Index' }
  },
  {
    path: 'detail',
    component: TruckDetailComponent,
    data: { title: 'Truck Detail' }
  },
  {
    path: 'new',
    component: TruckEditComponent,
    data: { title: 'New Truck' }
  },  
  {
    path: 'edit/:id',
    component: TruckEditComponent,
    data: { title: 'Edit Truck' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckRoutingModule { }

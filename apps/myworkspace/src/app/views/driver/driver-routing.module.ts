import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverIndexComponent } from './driver-index/driver-index.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/drivers/index'
  },
  {
    path: 'index',
    component: DriverIndexComponent,
    data: { title: 'Drivers Index' }
  },
  {
    path: 'detail',
    component: DriverDetailComponent,
    data: { title: 'Driver Detail' }
  },
  {
    path: 'new',
    component: DriverEditComponent,
    data: { title: 'New Driver' }
  },  
  {
    path: 'edit/:id',
    component: DriverEditComponent,
    data: { title: 'Edit Driver' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }

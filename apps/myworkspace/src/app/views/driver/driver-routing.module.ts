import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverIndexComponent } from './driver-index/driver-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: DriverIndexComponent,
    data: { title: 'Drivers Index' }
  },
  {
    path: 'detail/:id',
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

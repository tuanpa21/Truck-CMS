import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusDetailComponent } from '../truck-status/status-detail/status-detail.component';
import { StatusEditComponent } from '../truck-status/status-edit/status-edit.component';
import { StatusIndexComponent } from '../truck-status/status-index/status-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/status/index'
  },
  {
    path: 'index',
    component: StatusIndexComponent,
    data: { title: 'Status Index' }
  },
  {
    path: 'detail',
    component: StatusDetailComponent,
    data: { title: 'Status Detail' }
  },
  {
    path: 'new',
    component: StatusEditComponent,
    data: { title: 'New Status' }
  },  
  {
    path: 'edit/:id',
    component: StatusEditComponent,
    data: { title: 'Edit Status' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckStatusRoutingModule { }

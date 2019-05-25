import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusIndexComponent } from './status-index/status-index.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusEditComponent } from './status-edit/status-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index'
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

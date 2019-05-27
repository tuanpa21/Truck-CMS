import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'trucks'
  },
  {
    path: 'trucks', loadChildren: 'apps/myworkspace/src/app/views/truck/truck.module#TruckModule',
  },
  {
    path: 'cargo-type', loadChildren: 'apps/myworkspace/src/app/views/cargo-type/cargo-type.module#CargoTypeModule',
  },
  {
    path: 'drivers', loadChildren: 'apps/myworkspace/src/app/views/driver/driver.module#DriverModule',
  },
  {
    path: 'status', loadChildren: 'apps/myworkspace/src/app/views/truck-status/truck-status.module#TruckStatusModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

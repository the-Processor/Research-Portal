import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAdminComponent } from './web-admin.component';

const routes: Routes = [
  { path: '', component: WebAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebAdminRoutingModule{}

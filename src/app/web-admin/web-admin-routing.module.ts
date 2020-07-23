import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAdminComponent } from './web-admin.component';
import { ManageCollegeQueriesComponent } from './manage-college-queries/manage-college-queries.component';

const routes: Routes = [
  { path: '', component: WebAdminComponent, children: [
    { path: 'manage-college-queries', component: ManageCollegeQueriesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebAdminRoutingModule{}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAdminComponent } from './web-admin.component';
import { ManageCollegeQueriesComponent } from './manage-college-queries/manage-college-queries.component';
import { ManageCollegeAdminsComponent } from './manage-college-admins/manage-college-admins.component';
import { ViewCollegeAdminsComponent } from './view-college-admins/view-college-admins.component';

const routes: Routes = [
  { path: '', component: WebAdminComponent, children: [
    { path: '', redirectTo: 'manage-college-admins', pathMatch: 'full'},
    { path: 'manage-college-queries', component: ManageCollegeQueriesComponent},
    { path: 'manage-college-admins', component: ManageCollegeAdminsComponent},
    { path: 'view-college-admins', component: ViewCollegeAdminsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebAdminRoutingModule{}

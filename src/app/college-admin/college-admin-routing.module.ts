import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeAdminComponent } from './college-admin.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';

const routes: Routes = [
  { path: '', component: CollegeAdminComponent, children: [
    { path: 'manage-notices', component: ManageNoticesComponent },
    { path: 'admin-queries', component: AdminQueriesComponent },
    { path: 'manage-student-queries', component: ManageStudentQueriesComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CollegeAdminRoutingModule{}

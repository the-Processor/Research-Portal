import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeAdminComponent } from './college-admin.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AskQueriesComponent } from './ask-queries/ask-queries.component';

const routes: Routes = [
  { path: '', component: CollegeAdminComponent, children: [
    { path: '', redirectTo: 'manage-notices', pathMatch: 'full' },
    { path: 'ask-query', component: AskQueriesComponent },
    { path: 'manage-notices', component: ManageNoticesComponent },
    { path: 'admin-queries', component: AdminQueriesComponent },
    { path: 'manage-student-queries', component: ManageStudentQueriesComponent },
    { path: 'manage-students', component: ManageStudentsComponent },
    { path: 'view-students', component: ViewStudentsComponent }
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

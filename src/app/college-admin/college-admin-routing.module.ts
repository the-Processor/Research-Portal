import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeAdminComponent } from './college-admin.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AskQueriesComponent } from './ask-queries/ask-queries.component';
import { ViewAdminQueriesComponent } from './view-admin-queries/view-admin-queries.component';
import { ViewAdminNoticesComponent } from './view-admin-notices/view-admin-notices.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';

const routes: Routes = [
  { path: '', component: CollegeAdminComponent, children: [
    { path: '', redirectTo: 'manage-notices', pathMatch: 'full' },
    { path: 'ask-query', component: AskQueriesComponent },
    { path: 'manage-notices', component: ManageNoticesComponent },
    { path: 'admin-queries', component: ViewAdminQueriesComponent },
    { path: 'manage-student-queries', component: ManageStudentQueriesComponent },
    { path: 'manage-students', component: ManageStudentsComponent },
    { path: 'view-students', component: ViewStudentsComponent },
    { path: 'admin-notices', component: ViewAdminNoticesComponent },
    { path: 'settings', component: UserSettingsComponent }
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

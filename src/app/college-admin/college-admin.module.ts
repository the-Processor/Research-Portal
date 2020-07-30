import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { AskQueriesComponent } from './ask-queries/ask-queries.component';
import { ViewAdminQueriesComponent } from './view-admin-queries/view-admin-queries.component';

@NgModule({
  declarations: [
    ManageNoticesComponent,
    AdminQueriesComponent,
    ManageStudentQueriesComponent,
    ManageStudentsComponent,
    ViewStudentsComponent,
    AskQueriesComponent,
    ViewAdminQueriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollegeAdminRoutingModule,
    MatExpansionModule,
    MatButtonModule
  ]
})

export class CollegeAdminModule{}

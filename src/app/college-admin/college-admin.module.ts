import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { AskQueriesComponent } from './ask-queries/ask-queries.component';
import { ViewAdminQueriesComponent } from './view-admin-queries/view-admin-queries.component';
import { ViewAdminNoticesComponent } from './view-admin-notices/view-admin-notices.component';

@NgModule({
  declarations: [
    ManageNoticesComponent,
    ManageStudentQueriesComponent,
    ManageStudentsComponent,
    ViewStudentsComponent,
    AskQueriesComponent,
    ViewAdminQueriesComponent,
    ViewAdminNoticesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollegeAdminRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
  ]
})

export class CollegeAdminModule{}

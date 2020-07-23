import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { ManageStudentQueriesComponent } from './manage-student-queries/manage-student-queries.component';

@NgModule({
  declarations: [
    ManageNoticesComponent,
    AdminQueriesComponent,
    ManageStudentQueriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollegeAdminRoutingModule
  ]
})

export class CollegeAdminModule{}

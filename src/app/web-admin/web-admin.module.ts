import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebAdminRoutingModule } from './web-admin-routing.module';
import { ManageCollegeQueriesComponent } from './manage-college-queries/manage-college-queries.component';
import { ManageCollegeAdminsComponent } from './manage-college-admins/manage-college-admins.component';

@NgModule({
  declarations: [
  ManageCollegeQueriesComponent,
  ManageCollegeAdminsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebAdminRoutingModule
  ]
})

export class WebAdminModule{}

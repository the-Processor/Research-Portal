import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebAdminRoutingModule } from './web-admin-routing.module';
import { ManageCollegeQueriesComponent } from './manage-college-queries/manage-college-queries.component';
import { ManageCollegeAdminsComponent } from './manage-college-admins/manage-college-admins.component';
import { ViewCollegeAdminsComponent } from './view-college-admins/view-college-admins.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
  ManageCollegeQueriesComponent,
  ManageCollegeAdminsComponent,
  ViewCollegeAdminsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebAdminRoutingModule,
    MatExpansionModule,
    MatButtonModule
  ]
})

export class WebAdminModule{}

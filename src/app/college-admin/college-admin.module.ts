import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollegeAdminRoutingModule } from './college-admin-routing.module';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';

@NgModule({
  declarations: [
    ManageNoticesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollegeAdminRoutingModule
  ]
})

export class CollegeAdminModule{}

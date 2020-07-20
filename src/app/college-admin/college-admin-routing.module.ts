import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeAdminComponent } from './college-admin.component';
import { ManageNoticesComponent } from './manage-notices/manage-notices.component';

const routes: Routes = [
  { path: '', component: CollegeAdminComponent, children: [
    { path: 'manage-notices', component: ManageNoticesComponent }
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

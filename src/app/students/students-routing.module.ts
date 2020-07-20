import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AskQueryComponent } from './ask-query/ask-query.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';

const routes: Routes = [
  { path: '', component: StudentsComponent, children: [
    { path: 'ask-query', component: AskQueryComponent},
    { path: 'check-status', component: CheckStatusComponent},
    { path: 'publish-paper', component: PublishPaperComponent},
    { path: 'settings', component: UserSettingsComponent}
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

export class StudentRoutingModule{}

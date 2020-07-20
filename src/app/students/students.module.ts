import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './students-routing.module';
import { AskQueryComponent } from './ask-query/ask-query.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { CheckStatusComponent } from './check-status/check-status.component';

@NgModule({
  declarations: [
  AskQueryComponent,
  ViewQueriesComponent,
  PublishPaperComponent,
  CheckStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})

export class StudentsModule{}

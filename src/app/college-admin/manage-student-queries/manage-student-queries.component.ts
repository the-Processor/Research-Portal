import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NewStudentQueryService } from 'src/app/services/new-student-query.service';
import { Query } from 'src/app/models/query';

@Component({
  selector: 'app-manage-student-queries',
  templateUrl: './manage-student-queries.component.html',
  styleUrls: ['./manage-student-queries.component.scss']
})
export class ManageStudentQueriesComponent implements OnInit, OnDestroy {

  querySub: Subscription;

  queries: Query[] = [];

  constructor(private queryService: NewStudentQueryService){}

  ngOnInit(): void {
    this.queries = this.queryService.getQueries();
    this.querySub = this.queryService.queryUpdated.subscribe(
      updQueries => {
        this.queries = updQueries;
      }
    );
  }

  onPost(form: NgForm, index: number){
    console.log(form.value)
    this.queryService.toRepliedQueries(index, form.value.reply);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}

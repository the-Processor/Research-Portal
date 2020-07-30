import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
// import { NewStudentQueryService } from 'src/app/services/new-student-query.service';
import { Query } from 'src/app/models/query';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-manage-student-queries',
  templateUrl: './manage-student-queries.component.html',
  styleUrls: ['./manage-student-queries.component.scss']
})
export class ManageStudentQueriesComponent implements OnInit, OnDestroy {

  querySub: Subscription;

  queries: Query[] = [];

  constructor(private queryService: QueryService){}

  ngOnInit(): void {
    this.queryService.getNewStudentQueries();
    this.querySub = this.queryService.newStudentUpdated.subscribe(
      updQueries => {
        this.queries = updQueries;
      }
    );
  }

  onReply(form: NgForm, index: number){
    this.queryService.replyStudentQueries(index, form.value.reply);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}

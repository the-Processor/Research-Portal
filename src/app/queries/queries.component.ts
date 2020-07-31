import { Component, OnInit, OnDestroy } from '@angular/core';
import { Query } from '../models/query';
import { Subscription } from 'rxjs';
import { QueryService } from '../services/query.service';
// import { RepliedStudentQueryService } from '../services/replied-student-query.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit, OnDestroy {

  repliedQueriesSub: Subscription;

  repliedStudentQueries: Query[] = [];

  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit(): void {
    this.queryService.getOldStudentQueries();
    this.repliedQueriesSub = this.queryService.oldStudentUpdated.subscribe(
      updQueries => {
        this.repliedStudentQueries = updQueries;
      }
    );
  }

  ngOnDestroy(){
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Query } from '../models/query';
import { Subscription } from 'rxjs';
import { RepliedStudentQueryService } from '../services/replied-student-query.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit, OnDestroy {

  repliedQueriesSub: Subscription;

  repliedStudentQueries: Query[] = [];

  constructor(
    private repliedStudentQueryService: RepliedStudentQueryService
  ) { }

  ngOnInit(): void {
    this.repliedStudentQueries = this.repliedStudentQueryService.getQueries();
    this.repliedQueriesSub = this.repliedStudentQueryService.repliedQueryUpdated.subscribe(
      updQueries => {
        this.repliedStudentQueries = updQueries;
      }
    );
  }

  ngOnDestroy(){
    this.repliedQueriesSub.unsubscribe();
  }

}

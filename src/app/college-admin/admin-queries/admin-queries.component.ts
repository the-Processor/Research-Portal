import { Component, OnInit, OnDestroy } from '@angular/core';

// import { RepliedAdminQueryService } from 'src/app/services/replied-admin-query.service';
import { Subscription } from 'rxjs';
import { Query } from 'src/app/models/query';

@Component({
  selector: 'app-admin-queries',
  templateUrl: './admin-queries.component.html',
  styleUrls: ['./admin-queries.component.scss']
})
export class AdminQueriesComponent implements OnInit, OnDestroy {

  repliedQueriesSub: Subscription;

  repliedAdminQueries: Query[] = [];

  constructor(
    // private repliedAdminQueryService: RepliedAdminQueryService
  ) { }

  ngOnInit(): void {
    // this.repliedAdminQueries = this.repliedAdminQueryService.getQueries();
    // this.repliedQueriesSub = this.repliedAdminQueryService.repliedQueryUpdated.subscribe(
    //   updQueries => {
    //     this.repliedAdminQueries = updQueries;
    //   }
    // );
  }

  ngOnDestroy(){
    this.repliedQueriesSub.unsubscribe();
  }

}

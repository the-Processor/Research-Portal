import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/models/authData.model';
import { Subscription, Observable } from 'rxjs';
import { Query } from 'src/app/models/query';
import { QueryService } from 'src/app/services/query.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-admin-queries',
  templateUrl: './view-admin-queries.component.html',
  styleUrls: ['./view-admin-queries.component.scss']
})
export class ViewAdminQueriesComponent implements OnInit {

  // private loggedUser: AuthData;

  // private logSub: Subscription;
  // private querySub: Subscription;
  // private delQuerySub: Observable<{message: string, data: any}>;

  // queries: Query[] = [];

  // constructor(
  //   private queryService: QueryService,
  //   private logService: LoginService
  //   ) { }

  // ngOnInit(): void {
  //   this.logSub = this.logService.loggedUser.subscribe(
  //     authData => {
  //       this.loggedUser = authData;
  //     }
  //   );
  //   this.queryService.getNewAdminQueries;
  //   this.querySub = this.queryService.newAdminUpdated.subscribe(
  //     updatedQueries => {
  //       this.queries = updatedQueries;
  //     }
  //   );
  // }

  // ngOnDestroy(){
  //   this.querySub.unsubscribe();
  //   this.logSub.unsubscribe();
  // }

  
  repliedQueriesSub: Subscription;

  repliedAdminQueries: Query[] = [];

  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit(): void {
    this.queryService.getOldAdminQueries();
    this.repliedQueriesSub = this.queryService.oldAdminUpdated.subscribe(
      updQueries => {
        this.repliedAdminQueries = updQueries;
      }
    );
  }

  ngOnDestroy(){
  }

}

import { Component, OnInit } from '@angular/core';
import { Query } from 'src/app/models/query';
import { AuthData } from 'src/app/models/authData.model';
import { Subscription, Subject } from 'rxjs';
import { QueryService } from 'src/app/services/query.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.scss']
})
export class ViewQueriesComponent implements OnInit {

  private loggedUser: AuthData;

  private myQueryUpd = new Subject<Query[]>();

  private logSub: Subscription;
  private querySub: Subscription;

  queries: Query[] = [];

  constructor(
    private queryService: QueryService,
    private logService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.logService.loggedUser.subscribe(
      authData => {
        this.loggedUser = authData;
      }
    );
    this.queryService.getQueryByEmail(this.loggedUser.email).subscribe(
      myQueries => {
        this.queries = myQueries.data;
        // this.myQueryUpd.next(this.queries.slice());
      }
    )
    this.querySub = this.myQueryUpd.subscribe(
      updatedQueries => {
        this.queries = updatedQueries;
      }
    );
  }

  onDelete(index: number){
    this.queryService.deleteQuery(index);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
    this.logSub.unsubscribe();
  }

}

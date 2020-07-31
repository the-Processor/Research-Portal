import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

// import { NewAdminQueryService } from 'src/app/services/new-admin-query.service';
import { Query } from '../../models/query';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-manage-college-queries',
  templateUrl: './manage-college-queries.component.html',
  styleUrls: ['./manage-college-queries.component.scss']
})
export class ManageCollegeQueriesComponent implements OnInit, OnDestroy {

  querySub: Subscription;

  queries: Query[] = [];

  constructor(private queryService: QueryService){}

  // ngOnInit(): void {
  //   // this.queries = this.queryService.getQueries();
  //   // this.querySub = this.queryService.queryUpdated.subscribe(
  //   //   updQueries => {
  //   //     this.queries = updQueries;
  //   //   }
  //   // );
  // }

  // onPost(form: NgForm, index: number){
  //   // this.queryService.toRepliedQueries(index, form.value.reply);
  // }

  // ngOnDestroy(){
  //   this.querySub.unsubscribe();
  // }

  ngOnInit(): void {
    this.queryService.getNewAdminQueries();
    this.querySub = this.queryService.newAdminUpdated.subscribe(
      updQueries => {
        this.queries = updQueries;
      }
    );
  }

  onReply(form: NgForm, index: number){
    this.queryService.replyAdminQueries(index, form.value.reply);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}

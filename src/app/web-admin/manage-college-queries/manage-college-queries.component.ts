import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

// import { NewAdminQueryService } from 'src/app/services/new-admin-query.service';
import { Query } from '../../models/query';

@Component({
  selector: 'app-manage-college-queries',
  templateUrl: './manage-college-queries.component.html',
  styleUrls: ['./manage-college-queries.component.scss']
})
export class ManageCollegeQueriesComponent implements OnInit, OnDestroy {

  querySub: Subscription;

  queries: Query[] = [];

  // constructor(private queryService: NewAdminQueryService){}

  ngOnInit(): void {
    // this.queries = this.queryService.getQueries();
    // this.querySub = this.queryService.queryUpdated.subscribe(
    //   updQueries => {
    //     this.queries = updQueries;
    //   }
    // );
  }

  onPost(form: NgForm, index: number){
    // this.queryService.toRepliedQueries(index, form.value.reply);
  }

  ngOnDestroy(){
    this.querySub.unsubscribe();
  }

}

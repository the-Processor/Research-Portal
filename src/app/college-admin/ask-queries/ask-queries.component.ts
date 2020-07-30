import { Component, OnInit, ViewChild } from '@angular/core';
import { Query } from 'src/app/models/query';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthData } from 'src/app/models/authData.model';
import { QueryService } from 'src/app/services/query.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ask-queries',
  templateUrl: './ask-queries.component.html',
  styleUrls: ['./ask-queries.component.scss']
})
export class AskQueriesComponent implements OnInit {
  private adjust = new AdjustDayAndMonth();

  @ViewChild('f', {static: false}) queryForm: NgForm;

  private logSub: Subscription;

  private loggedUser: AuthData;

  constructor(
    private queryService: QueryService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      userData => {
        this.loggedUser = userData;
      }
    );
  }

  onSubmit(){
    const date = `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`;
    const newQuery = new Query(
      null,
      this.loggedUser.email,
      date,
      'student',
      this.queryForm.value.question
    );
    console.log(newQuery);
    this.queryService.postQuery(newQuery);
    this.queryForm.reset();
  }

  onClear(){
    this.queryForm.reset();
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

}

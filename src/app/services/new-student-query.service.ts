import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Query } from '../models/query';
import { RepliedStudentQueryService } from './replied-student-query.service';

@Injectable({ providedIn: 'root' })

export class NewStudentQueryService{

  queryUpdated = new Subject<Query[]>();

  constructor(private repliedQueryService: RepliedStudentQueryService){}

  queries: Query[] = [
    {
      _id: 'asdfnoisjdvnovihj',
      emailId: 'shoaib@gmail.com',
      question: 'From where can we find the template?',
      response: ''
    },
    {
      _id: 'ppierngv7980sdhfe23hfvisbvg',
      emailId: 'tanvee@gmail.com',
      question: 'When will we be informed about the dates?',
      response: ''
    },
    {
      _id: 'sakipois87943jb83klguf',
      emailId: 'huzefa@gmail.com',
      question: 'How many co-authors are allowed?',
      response: ''
    },
    {
      _id: 'jbpdivfgo987jsoeyfon',
      emailId: 'kashif@gmail.com',
      question: 'How to download the research papers?',
      response: ''
    }
  ];

  getQueries(){
    return this.queries.slice();
  }

  addQuery(newQuery: Query){
    this.queries.push(newQuery);
    this.queryUpdated.next(this.queries.slice());
  }

  toRepliedQueries(index: number, reply: string){
    this.queries[index].response = reply;
    this.repliedQueryService.addQuery(this.queries[index]);
    this.queries.splice(index, 1);
    this.queryUpdated.next(this.queries.slice());
  }

  deleteQueryByIndex(index: number){
    this.queries.splice(index, 1);
    this.queryUpdated.next(this.queries.slice());
  }

}

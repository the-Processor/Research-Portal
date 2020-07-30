// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Query } from '../models/query';
// import { RepliedAdminQueryService } from './replied-admin-query.service';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })

// export class NewAdminQueryService{

//   queryUpdated = new Subject<Query[]>();

//   constructor(
//     private repliedQueryService: RepliedAdminQueryService,
//     private http: HttpClient
//   ){}

//   queries: Query[] = [];

//   // getQueries(){
//   //   this.http.get()
//   //   return this.queries.slice();
//   // }

//   addQuery(newQuery: Query){
//     this.queries.push(newQuery);
//     this.queryUpdated.next(this.queries.slice());
//   }

//   toRepliedQueries(index: number, reply: string){
//     this.queries[index].response = reply;
//     this.repliedQueryService.addQuery(this.queries[index]);
//     this.queries.splice(index, 1);
//     this.queryUpdated.next(this.queries.slice());
//   }

//   deleteQueryByIndex(index: number){
//     this.queries.splice(index, 1);
//     this.queryUpdated.next(this.queries.slice());
//   }

// }

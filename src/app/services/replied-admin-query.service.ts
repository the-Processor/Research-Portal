// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Query } from '../models/query';

// @Injectable({ providedIn: 'root' })

// export class RepliedAdminQueryService{

//   repliedQueryUpdated = new Subject<Query[]>();

//   queries: Query[] = [];

//   getQueries(){
//     return this.queries.slice();
//   }

//   addQuery(newQuery: Query){
//     this.queries.push(newQuery);
//     this.repliedQueryUpdated.next(this.queries.slice());
//   }

//   deleteQueryByIndex(index: number){
//     this.queries.splice(index, 1);
//     this.repliedQueryUpdated.next(this.queries.slice());
//   }

// }

// // {
// //   _id: 'asdfnoisjdvnovihj',
// //   emailId: 'shoaib@gmail.com',
// //   question: 'From where can we find the template?',
// //   response: ''
// // },
// // {
// //   _id: 'ppierngv7980sdhfe23hfvisbvg',
// //   emailId: 'tanvee@gmail.com',
// //   question: 'When will we be informed about the dates?',
// //   response: ''
// // },
// // {
// //   _id: 'sakipois87943jb83klguf',
// //   emailId: 'huzefa@gmail.com',
// //   question: 'How many co-authors are allowed?',
// //   response: ''
// // },
// // {
// //   _id: 'jbpdivfgo987jsoeyfon',
// //   emailId: 'kashif@gmail.com',
// //   question: 'How to download the research papers?',
// //   response: ''
// // }

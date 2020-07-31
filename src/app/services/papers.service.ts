import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Paper } from '../models/paper';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PaperService{

  constructor(private http: HttpClient){}

  papersUpdated = new Subject<Paper[]>();

  papers: Paper[] = [];

  getPapers(){
    this.http.get<{message: string, data: Paper[]}>(
      'http://localhost:3000/api/v1/papers'
    ).subscribe(
      response => {
        this.papers = response.data;
        this.papersUpdated.next(this.papers.slice());
      }
    )
    return this.papers.slice();
  }

  addPaper(newPaper: Paper, file: File){
    console.log({ newPaper, file })
    // const postData = new FormData();
    // postData.append('title', newPaper.title);
    // postData.append('keywords', newPaper.keywords.toString());
    // postData.append('areaOfResearch', newPaper.areaOfResearch.toString());
    // postData.append('name', newPaper.author.name);
    // postData.append('email', newPaper.author.email);
    // postData.append('institute', newPaper.author.institute);
    // postData.append('contact', newPaper.author.contact.toString());
    // postData.append('name1', newPaper.coAuthor1.name1);
    // postData.append('email1', newPaper.coAuthor1.email1);
    // postData.append('institute1', newPaper.coAuthor1.institute1);
    // postData.append('contact1', newPaper.coAuthor1.contact1.toString());
    // postData.append('name2', newPaper.coAuthor2.name2);
    // postData.append('email2', newPaper.coAuthor2.email2);
    // postData.append('institute2', newPaper.coAuthor2.institute2);
    // postData.append('contact2', newPaper.coAuthor2.contact2.toString());
    // postData.append('publisher', newPaper.publisher);
    // postData.append('publicationDate', newPaper.publicationDate);
    // postData.append('paperPath', newPaper.paperPath);
    // postData.append('paperStatusCode', newPaper.paperStatusCode.toString());
    // postData.append('file', file, newPaper.author.name.split(' ')[0]);
    this.http.post<{message: string, data: Paper}>(
      'http://localhost:3000/api/v1/papers',
      // postData
      { newPaper, file }
    ).subscribe(
      response => {
        this.papers.push(response.data);
        this.papersUpdated.next(this.papers.slice());
      }
    )
  }

  getPaperStatusCodeById(id: string){
    return this.http.get<{message: string, data: number}>(
      'http://localhost:3000/api/v1/papers/status/' + id
    )
  }

  changePaperStatusCode(index: number, code: number){
    const id = this.papers[index]._id;
    this.http.put<{message: string, data: Paper}>(
      'http://localhost:3000/api/v1/papers/status/' + id,
      { status: code }
    ).subscribe(
      response => {
        this.papers[index] = response.data;
        this.papersUpdated.next(this.papers.slice());
      }
    )
  }

  deletePaper(index: number){
    this.papers.splice(index, 1);
    this.papersUpdated.next(this.papers.slice());
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Paper } from '../models/paper';

@Injectable({providedIn: 'root'})

export class PaperService{

  papersUpdated = new Subject<Paper[]>();

  papers: Paper[] = [
    {
      title: 'Theoretical Research of Surface Roughness for HSM',
      areaOfResearch: 'mechanical',
      authorName: 'S WANG, J Zhao, X Ai'
    },
    {
      title: 'Elementary fluid dynamics',
      areaOfResearch: 'mechanical',
      authorName: 'DJ Acheson'
    }
  ];

  getPapers(){
    return this.papers.slice();
  }

  addPaper(newPaper: Paper){
    this.papers.push(newPaper);
    this.papersUpdated.next(this.papers.slice());
  }

  deletePaper(index: number){
    this.papers.splice(index, 1);
    this.papersUpdated.next(this.papers.slice());
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaperService } from '../services/papers.service';
import { Paper } from '../models/paper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  paperSub: Subscription;

  papers: Paper[] = [];

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    this.papers = this.paperService.getPapers();
    this.paperSub = this.paperService.papersUpdated.subscribe(
      updPapers => {
        this.papers = updPapers;
      }
    );
  }

  onClick(){
    this.papers = this.papers.filter(paper => paper.areaOfResearch === 'computer');
    this.paperService.papersUpdated.next(this.papers);
  }

  ngOnDestroy(){
    this.paperSub.unsubscribe();
  }

}

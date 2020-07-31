import { Component, OnInit, ViewChild } from '@angular/core';
import { PaperService } from 'src/app/services/papers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {

  statusCode: number;
  status: string;

  @ViewChild('f', {static: false}) form: NgForm;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.paperService.getPaperStatusCodeById(this.form.value.paperId)
    .subscribe(
      statusRes => {
        this.statusCode = statusRes.data;
        if(this.statusCode === 0){
          this.status = 'Waiting for College Admin verification';
        }else if(this.statusCode === 1){
          this.status = 'Rejected by College Admin'
        }else if(this.statusCode === 2){
          this.status = 'Accepted by College Admin & Published Successfully'
        }
      }
    )
  }

}

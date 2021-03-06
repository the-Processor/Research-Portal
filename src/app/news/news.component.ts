import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../services/notice.service';
import { Notice } from '../models/notice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  noticeSub: Subscription;

  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getStudentNotices();
    this.noticeSub = this.noticeService.studentNoticesUpdated.subscribe(
      updatedNotices => {
        this.notices = updatedNotices;
      }
    );

  }

  getDisplayValueNew(index: number){
    const noticeDate = new Date(this.notices[index].date).getTime();
    const todayDate = new Date().getTime();
    const diff = todayDate - noticeDate;
    // console.log(diff)
    if(diff <= 432000000){
      return;
    }else{
      return 'none';
    }
  }

}

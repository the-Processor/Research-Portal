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
    this.notices = this.noticeService.getNotices();
    this.noticeSub = this.noticeService.noticesUpdated.subscribe(
      updatedNotices => {
        this.notices = updatedNotices;
      }
    );
  }

  getDisplayValueNew(index: number){
    const noticeDate = new Date(this.notices[index].date);
    const todayDate = new Date();
  }

}

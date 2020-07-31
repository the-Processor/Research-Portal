import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notice } from 'src/app/models/notice';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-view-admin-notices',
  templateUrl: './view-admin-notices.component.html',
  styleUrls: ['./view-admin-notices.component.scss']
})
export class ViewAdminNoticesComponent implements OnInit {

  noticeSub: Subscription;

  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getAdminNotices();
    this.noticeSub = this.noticeService.adminNoticesUpdated.subscribe(
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

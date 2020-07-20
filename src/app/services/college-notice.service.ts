import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Notice } from '../models/notice';

@Injectable({providedIn: 'root'})

export class CollegeNoticeService{

  collegeNoticesUpdated = new Subject<Notice[]>();

  collegeNotices: Notice[] = [
    {
      refno: 'asidjf9we87rhfsdigfisadjhfs',
      date: '2020-07-19',
      heading: 'Close Students registration',
      content: 'All college admins are hereby informed to close student registrations by 2020-07-25!'
    }
  ];

  getNotices(){
    return this.collegeNotices.slice();
  }

  addNotice(newNotice: Notice){
    this.collegeNotices.push(newNotice);
    this.collegeNoticesUpdated.next(this.collegeNotices.slice());
  }

  deleteNotice(index: number){
    this.collegeNotices.splice(index, 1);
    this.collegeNoticesUpdated.next(this.collegeNotices.slice());
  }

}

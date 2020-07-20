import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Notice } from '../models/notice';

@Injectable({providedIn: 'root'})

export class NoticeService{

  noticesUpdated = new Subject<Notice[]>();

  notices: Notice[] = [
    {
      refno: 'asidjf9we87rhfsdigfisadjhfs',
      date: '2020-07-19',
      heading: 'Important Notice for Authors!',
      content: 'This is regarding the papers submitted...'
    },
    {
      refno: 'poupojnv7947fnwsjkvmp;wspoe',
      date: '2020-07-19',
      heading: 'Check Status of your paper!',
      content: 'Hello Researcher, we are happy to announce that now you can check the status of your paper right from the website instead of calling us. We would request you to go and check your paper status on the below link...'
    },
    {
      refno: 'asdbfrsbwertwberethyteyj4556',
      date: '2020-07-17',
      heading: 'Articles being accepted online!',
      content: 'We have started accepting articles by online means directly through website...'
    }
  ];

  getNotices(){
    return this.notices.slice();
  }

  addNotice(newNotice: Notice){
    this.notices.push(newNotice);
    this.noticesUpdated.next(this.notices.slice());
  }

  deleteNotice(index: number){
    this.notices.splice(index, 1);
    this.noticesUpdated.next(this.notices.slice());
  }

}

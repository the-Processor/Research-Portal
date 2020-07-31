import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Notice } from '../models/notice';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({providedIn: 'root'})

export class NoticeService implements OnInit{

  studentNoticesUpdated = new Subject<Notice[]>();
  adminNoticesUpdated = new Subject<Notice[]>();

  studentNotices: Notice[] = [];
  adminNotices: Notice[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){}

  getStudentNotices(){
    return this.http.get<{message: string, data: Notice[]}>(
      'http://localhost:3000/api/v1/notices/student'
    ).subscribe(
      response => {
        this.studentNotices = response.data;
        return this.studentNoticesUpdated.next(this.studentNotices.slice());
      }
    );
  }

  getAdminNotices(){
    return this.http.get<{message: string, data: Notice[]}>(
      'http://localhost:3000/api/v1/notices/admin'
    ).subscribe(
      response => {
        this.adminNotices = response.data;
        return this.adminNoticesUpdated.next(this.adminNotices.slice());
      }
    );
  }

  addNotice(newNotice: Notice){
    this.http.post<{message: string, data: Notice}>(
      'http://localhost:3000/api/v1/notices',
      newNotice
    ).subscribe(
      response => {
        if(response.data.type === 'admin'){
          this.adminNotices.push(response.data);
          return this.adminNoticesUpdated.next(this.adminNotices.slice());
      }else if(response.data.type === 'student'){
          this.studentNotices.push(response.data);
          return this.studentNoticesUpdated.next(this.studentNotices.slice());
      } 
      }
    );
  }

  deleteNotice(index: number, type: string){
    if(type === 'student'){
      const id = this.studentNotices[index].refno;
      this.http.delete<{message: string, data: any}>(
        'http://localhost:3000/api/v1/notices' + id
      ).subscribe(
        res => {
          this.studentNotices.splice(index, 1);
          this.studentNoticesUpdated.next(this.studentNotices.slice());
        }
      );
    }else if(type === 'admin'){
      const id = this.adminNotices[index].refno;
      this.http.delete<{message: string, data: any}>(
        'http://localhost:3000/api/v1/notices' + id
      ).subscribe(
        res => {
          this.adminNotices.splice(index, 1);
          this.adminNoticesUpdated.next(this.adminNotices.slice());
        }
      );
    }
  }

}

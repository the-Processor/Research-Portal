import { Component, OnInit, ViewChild } from '@angular/core';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';
import { NgForm } from '@angular/forms';
import { Notice } from 'src/app/models/notice';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-manage-admin-notices',
  templateUrl: './manage-admin-notices.component.html',
  styleUrls: ['./manage-admin-notices.component.scss']
})
export class ManageAdminNoticesComponent implements OnInit {

  private adjust = new AdjustDayAndMonth();

  @ViewChild('f', {static: false}) noticeForm: NgForm;

  selectedNoticeIndex: number;

  notice: Notice;

  constructor(
    private noticeService: NoticeService
    ) { }

  ngOnInit(): void {
  }

  onPostNotice(){
      const newNotice = new Notice(
        null,
        `${new Date().getFullYear()}-${this.adjust.month}-${this.adjust.day}`,
        'admin',
        this.noticeForm.value.heading,
        this.noticeForm.value.content
      );
      this.noticeService.addNotice(newNotice);
      this.noticeForm.reset();
  }

  onClear(){
    this.noticeForm.reset();
  }
}

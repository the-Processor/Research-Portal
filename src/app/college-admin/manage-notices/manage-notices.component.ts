import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdjustDayAndMonth } from 'src/app/shared/adjust-day-month';
import { Notice } from 'src/app/models/notice';
import { NoticeService } from 'src/app/services/notice.service';



@Component({
  selector: 'app-manage-notices',
  templateUrl: './manage-notices.component.html',
  styleUrls: ['./manage-notices.component.scss']
})
export class ManageNoticesComponent implements OnInit {

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
        this.noticeForm.value.heading,
        this.noticeForm.value.content
      );
      this.noticeService.addNotice(newNotice);
  }

  onClear(){
    this.noticeForm.reset();
  }
}

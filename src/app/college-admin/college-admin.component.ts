import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-admin',
  templateUrl: './college-admin.component.html',
  styleUrls: ['./college-admin.component.scss']
})
export class CollegeAdminComponent implements OnInit {

  showDashboard = false;
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBackdrop(){
    this.showDashboard = !this.showDashboard;
  }

}

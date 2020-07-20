import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-admin',
  templateUrl: './web-admin.component.html',
  styleUrls: ['./web-admin.component.scss']
})
export class WebAdminComponent implements OnInit {

  showDashboard = false;
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBackdrop(){
    this.showDashboard = !this.showDashboard;
  }
}

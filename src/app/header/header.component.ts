import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isExpanded = false;
  isDropdownOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleNav(){
    this.isExpanded = !this.isExpanded;
  }
  onLinkClicked(){
    this.isExpanded = false;
  }

  // onDropdownToggle(){
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

}

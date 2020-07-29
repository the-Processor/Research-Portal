import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { AuthData } from '../models/authData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isExpanded = false;
  isDropdownOpen = false;

  private logSub: Subscription;

  logType: string = null;
  logId: string = null;
  logName: string = null;
  loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logSub = this.loginService.loggedUser.subscribe(
      (authData: AuthData) => {
        if(!authData){
          this.logId = null;
          this.logName = null;
          this.logType = null;
          this.loggedIn = false;
          return;
        }
        this.logId = authData.uid;
        this.logName = authData.name;
        this.logType = authData.type;
        this.loggedIn = true;
      }
    );
  }

  onLogOut(){
    this.loginService.logOut();
    this.logId = null;
    this.logName = null;
    this.logType = null;
    this.loggedIn = false;
  }

  onToggleNav(){
    this.isExpanded = !this.isExpanded;
  }
  onLinkClicked(){
    this.isExpanded = false;
  }

  ngOnDestroy(){
    this.logSub.unsubscribe();
  }

  // onDropdownToggle(){
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

}

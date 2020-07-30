import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'research-portal';
  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.loginService.autoLogin();
  }
}

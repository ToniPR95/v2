import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  public currentUser: any;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.loginUsername.subscribe((newusername) => {
      this.currentUser = newusername;
    });
    if (this.currentUser == '') {
      this.currentUser = sessionStorage.getItem('user');
    }
  }
}

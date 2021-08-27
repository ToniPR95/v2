import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit, OnDestroy {
  public currentUser: any;

  subscription: Subscription;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.loginUsername.subscribe(
      (newusername) => {
        this.currentUser = newusername;
      }
    );
  }

  ngOnInit(): void {
    if (this.currentUser == '') {
      this.currentUser = sessionStorage.getItem('user');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

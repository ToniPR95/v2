import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'preprosta-aplikacija';

  constructor(private router: Router) {}

  isContentUrl() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/login') {
      return true;
    } else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUsername$: BehaviorSubject<string>;
  loginUsername: Observable<string>;

  constructor() {
    this.loginUsername$ = new BehaviorSubject('');
    this.loginUsername = this.loginUsername$.asObservable();
  }

  getLoginUsername(user: string) {
    this.loginUsername$.next(user);
  }
}

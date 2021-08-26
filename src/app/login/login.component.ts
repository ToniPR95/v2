import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public submitted: boolean = false;
  fakeUsername: string = 'Marko';
  fakePassword: string = 'inden123';
  errorMessage: string = '';
  isFailedLogin = false;

  public loginUser!: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.controls.username.value);
  }

  public submitForm(): void {
    this.loginUser = this.loginForm.controls.username.value;
    this.loginService.getLoginUsername(this.loginUser);
    console.log(this.loginUser);
    if (this.loginForm.controls.username.value === this.fakeUsername) {
      if (this.loginForm.controls.password.value === this.fakePassword) {
        this.router.navigate(['/welcome-screen']);
      } else {
        this.isFailedLogin = true;
        this.errorMessage = 'Napačno geslo.';
      }
    } else {
      this.isFailedLogin = true;
      this.errorMessage = 'Napačen uporabnik.';
    }
  }

  isFormValid() {
    if (this.loginForm.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }

  isNotEmpty() {
    if (this.loginForm.controls.password.value === '') {
      return false;
    } else {
      return true;
    }
  }
}

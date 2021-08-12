import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public submitted: boolean = false;
  fakeUsername: string = 'Luka';
  fakePassword: string = 'TestingPassword';
  errorMessage: string = '';
  isFailedLogin = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });


  constructor(private router: Router) {}

  ngOnInit(): void {}

  public submitForm(): void {
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

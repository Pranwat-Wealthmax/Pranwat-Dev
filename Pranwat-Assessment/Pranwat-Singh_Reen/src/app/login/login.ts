import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../shared/button/button';

@Component({
  selector: 'app-login-page',
  imports: [ButtonComponent],
  templateUrl: './login.html'
})
export class LoginPage {
  username = '';
  password = '';
  loginError = '';
  passwordVisible = false;

  constructor(private readonly router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'password123') {
      this.loginError = '';
      this.openDashboard();
      return;
    }

    this.loginError = 'Username or password is incorrect.';
  }
  openDashboard(): void {
    void this.router.navigateByUrl('/dashboard.html');
  }
}

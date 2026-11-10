import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonComponent } from './shared/button/button';
import { InputComponent } from './shared/input/input';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './app.html'
})
export class App {
  username = '';
  password = '';
  loginError = '';
  passwordVisible = false;
  login(): void {
    if (this.username === 'Admin' && this.password === 'Password123') {
      this.openDashboard();
      return;
    }
    this.loginError = 'Username or password is incorrect.';
  }
  openDashboard(): void {
    window.location.href = '/dashboard.html';
  }
}

import { Component } from '@angular/core';

import { InputComponent } from './shared/input/input';
import { ButtonComponent } from './shared/button/button';
import { Navbar } from './navbar/navbar';

import {
  checkPasswordStrength,
  isPasswordValid,
  PasswordStrength
} from './utils/password-validator';

@Component({
  selector: 'app-root',
  imports: [InputComponent, ButtonComponent, Navbar],
  templateUrl: './app.html'
})
export class App {

  password = '';

  passwordStrength: PasswordStrength =
    checkPasswordStrength('');

  updatePassword(value: string): void {

    this.password = value;

    this.passwordStrength =
      checkPasswordStrength(value);

  }

  get isValidPassword(): boolean {

    return isPasswordValid(this.password);

  }

}
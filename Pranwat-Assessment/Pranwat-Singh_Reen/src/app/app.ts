import { Component } from '@angular/core';
import { InputComponent } from './shared/input/input';
import { ButtonComponent } from './shared/button/button';

@Component({
  selector: 'app-root',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './app.html'
})
export class App {}
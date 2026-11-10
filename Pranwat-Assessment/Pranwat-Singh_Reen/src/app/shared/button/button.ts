import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html'
})
export class ButtonComponent {
  @Input() label: string = 'Button';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();
}
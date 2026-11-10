
import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.html'
})
export class InputComponent {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {

    const value =
      (event.target as HTMLInputElement).value;

    this.valueChange.emit(value);

  }

}
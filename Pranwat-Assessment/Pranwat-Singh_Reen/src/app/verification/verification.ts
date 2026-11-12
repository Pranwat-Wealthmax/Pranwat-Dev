import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification.html'
})
export class VerificationPage {
  @ViewChildren('codeInput') private codeInputs!: QueryList<ElementRef<HTMLInputElement>>;

  digits = ['', '', '', '', '', ''];
  feedback = '';

  constructor(private readonly router: Router) {}

  get canVerify(): boolean {
    return this.digits.every((digit) => digit.length === 1);
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const digit = input.value.replace(/\D/g, '').slice(-1);
    this.digits[index] = digit;
    input.value = digit;
    this.feedback = '';

    if (digit) {
      this.codeInputs.get(index + 1)?.nativeElement.focus();
    }
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.digits[index]) {
      this.codeInputs.get(index - 1)?.nativeElement.focus();
    } else if (event.key === 'ArrowLeft') {
      this.codeInputs.get(index - 1)?.nativeElement.focus();
    } else if (event.key === 'ArrowRight') {
      this.codeInputs.get(index + 1)?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent, index: number): void {
    const pastedDigits = event.clipboardData?.getData('text').replace(/\D/g, '') ?? '';
    if (!pastedDigits) {
      return;
    }

    event.preventDefault();
    pastedDigits.slice(0, this.digits.length - index).split('').forEach((digit, offset) => {
      const targetIndex = index + offset;
      this.digits[targetIndex] = digit;
      const input = this.codeInputs.get(targetIndex)?.nativeElement;
      if (input) {
        input.value = digit;
      }
    });

    const focusIndex = Math.min(index + pastedDigits.length, this.digits.length - 1);
    this.codeInputs.get(focusIndex)?.nativeElement.focus();
    this.feedback = '';
  }

  verify(event: Event): void {
    event.preventDefault();
    if (!this.canVerify) {
      return;
    }

    if (this.digits.join('') === '123456') {
      void this.router.navigateByUrl('/home.html');
      return;
    }

    this.feedback = 'The verification code is incorrect. Try 123456.';
    this.codeInputs.first?.nativeElement.focus();
  }
}

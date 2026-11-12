import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { vi } from 'vitest';
import { VerificationPage } from './verification';

describe('VerificationPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('navigates to the blank page for code 123456', () => {
    const fixture = TestBed.createComponent(VerificationPage);
    const page = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    page.digits = ['1', '2', '3', '4', '5', '6'];
    page.verify(new Event('submit'));

    expect(navigate).toHaveBeenCalledWith('/home.html');
  });

  it('shows an error for an incorrect complete code', () => {
    const fixture = TestBed.createComponent(VerificationPage);
    fixture.detectChanges();
    const page = fixture.componentInstance;

    page.digits = ['1', '2', '3', '4', '5', '0'];
    page.verify(new Event('submit'));

    expect(page.feedback).toBe('The verification code is incorrect. Try 123456.');
  });
});

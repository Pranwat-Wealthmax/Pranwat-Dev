import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { LoginPage } from './login';

describe('LoginPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('shows an error for invalid credentials', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const page = fixture.componentInstance;

    page.username = 'wrong';
    page.password = 'credentials';
    page.login();

    expect(page.loginError).toBe('Username or password is incorrect.');
  });

  it('opens verification only for the configured credentials', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const page = fixture.componentInstance;
    const openDashboard = vi.spyOn(page, 'openDashboard');

    page.username = 'admin';
    page.password = 'password123';
    page.login();

    expect(openDashboard).toHaveBeenCalledOnce();
    expect(page.loginError).toBe('');
  });
});

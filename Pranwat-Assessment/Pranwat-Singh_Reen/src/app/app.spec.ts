import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { vi } from 'vitest';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the login page without the navbar', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Login to Your Account');
    expect(compiled.querySelector('app-navbar')).toBeNull();
  });

  it('should show an error when credentials do not match', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.username = 'wrong';
    app.password = 'credentials';
    app.login();

    expect(app.loginError).toBe('Username or password is incorrect.');
  });

  it('should open the dashboard only when credentials match', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const openDashboard = vi.spyOn(app, 'openDashboard');

    app.username = 'Admin';
    app.password = 'Password123';
    app.login();

    expect(openDashboard).toHaveBeenCalledOnce();
    expect(app.loginError).toBe('');
  });
});

import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app shell', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the login route by default', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelector('app-login-page')).not.toBeNull();
  });
});

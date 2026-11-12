import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import { VerificationPage } from './verification/verification';
import { HomePage } from './home/home';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'dashboard.html', component: VerificationPage },
  { path: 'home.html', component: HomePage },
  { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
export const routes: Routes = [
  { path: '', component: Navbar },
  { path: 'home', component: Navbar },
  { path: '**', redirectTo: '' }
];

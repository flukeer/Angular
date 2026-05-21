import { Routes } from '@angular/router';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: 'about', component: About }, // เมื่อพิมพ์ /about ให้เปิด Component นี้
];

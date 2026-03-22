import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'product', loadComponent: () => import('./pages/product/product').then(m => m.Product) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.Cart) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },

];
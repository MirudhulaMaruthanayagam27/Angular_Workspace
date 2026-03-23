import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'product/:id', loadComponent: () => import('./pages/product/product').then(m => m.Product) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.Cart) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },


   // new pages2
  { path: 'home1', loadComponent: () => import('./pages2/home1/home1').then(m => m.Home1) },
  { path: 'product2/:id', loadComponent: () => import('./pages2/product2/product2').then(m => m.Product2) }

];
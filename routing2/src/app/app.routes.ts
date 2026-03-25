import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { unsavedGuard } from './guards/unsaved-guard';
import { adminChildGuard } from './guards/admin-child-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home/home').then(m => m.Home) },
  { path: 'login', loadComponent: () => import('./pages/login/login/login').then(m => m.Login) },

  { 
    path: 'dashboard', 
    loadComponent: () => import('./pages/dashboard/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  { 
    path: 'unsaved', 
    loadComponent: () => import('./pages/unsaved/unsaved/unsaved').then(m => m.Unsaved),
    canDeactivate: [unsavedGuard]
  },

  {
  path: 'admin',
  loadComponent: () => import('./pages/admin/admin/admin').then(m => m.Admin),
  canActivateChild: [adminChildGuard],
  children: [
    { path: 'orders', loadComponent: () => import('./pages/admin/orders/orders').then(m => m.Orders) },
    { path: 'products', loadComponent: () => import('./pages/admin/products/products').then(m => m.Products) },
    { path: 'users', loadComponent: () => import('./pages/admin/users/users').then(m => m.Users) }
  ]
}
];
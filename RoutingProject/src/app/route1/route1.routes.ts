import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { Cart } from './pages/cart/cart';
import { Wishlist } from './pages/wishlist/wishlist';
import { UserList } from './pages/admin/user-list/user-list';
import { ProductList } from './pages/product-list/product-list';
import { authGuard } from './guards/auth-guard';
import { adminChildGuard } from './guards/child.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'products', component: ProductList },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],          
    canActivateChild: [adminChildGuard], 
    children: [
      { path: 'cart', component: Cart },
      { path: 'wishlist', component: Wishlist },
      { path: 'user-list', component: UserList }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
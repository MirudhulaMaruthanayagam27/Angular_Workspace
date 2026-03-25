import { Routes } from '@angular/router';
import { authGuard } from './Route/guards/can-activate/auth-guard';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'product/:id', loadComponent: () => import('./pages/product/product').then(m => m.Product) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.Cart) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },

   // new pages2
  { path: 'home1', loadComponent: () => import('./pages2/home1/home1').then(m => m.Home1) },
  { path: 'product2/:id', loadComponent: () => import('./pages2/product2/product2').then(m => m.Product2) },


  //Child-routes

  {
  path: 'child-products',
  loadComponent: () => import('./ChildRoutes -1/child-products/child-products').then(m => m.ChildProducts),
  children: [
    {
      path: ':id',
      loadComponent: () => import('./ChildRoutes -1/child-product-detail/child-product-detail').then(m => m.ChildProductDetail),
      children: [
        {
          path: 'reviews',
          loadComponent: () => import('./ChildRoutes -1/child-reviews/child-reviews').then(m => m.ChildReviews)
        }
      ]
    }
  ]
}
,
//ChildRoutes-2

{
  path: 'child-products2',
  loadComponent: () => import('./ChildRoutes-2/child-products2/child-products2').then(m => m.ChildProducts2),
  children: [
    {
      path: ':id',
      loadComponent: () => import('./ChildRoutes-2/child-product-detail2/child-product-detail2').then(m => m.ChildProductDetail2),
      children: [
        {
          path: 'review2',
          loadComponent: () => import('./ChildRoutes-2/child-review2/child-review2').then(m => m.ChildReview2)
        }
      ]
    }
  ]
},
// Protected login/dashboard routes
  { 
    path: 'login', loadComponent: () => import('./Route/components/login/login').then(m => m.Login) },
  { path: 'dashboard', loadComponent: () => import('./Route/components/dashboard/dashboard').then(m => m.Dashboard), canActivate: [authGuard] }


];
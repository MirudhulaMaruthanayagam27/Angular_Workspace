import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { firstValueFrom } from 'rxjs';

export const adminChildGuard: CanActivateChildFn = async (_childRoute, _state) => {
  const router = inject(Router);
  const authService = inject(Auth);

  const user = await firstValueFrom(authService.getCurrentUser());

  if (!user) {
    alert('You must login first!');
    router.navigate(['/login']);
    return false;
  }
  const childPage = _childRoute.routeConfig?.path;
  console.log('Navigating to child page:', childPage, 'User role:', user.role);

  const roleAccess: { [key: string]: string[] } = {
    orders: ['admin'],
    products: ['admin'],
    users: ['admin','super-admin']
  };

  if (childPage && roleAccess[childPage]?.includes(user.role)) {
    alert(`Access granted to ${childPage} for role: ${user.role}`);
    return true; 
  } else {
    alert(`Access denied to ${childPage} for role: ${user.role}`);
    router.navigate(['/home']); 
    return false; 
  }
};
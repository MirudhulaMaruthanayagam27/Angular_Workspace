import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router); 
  const isLoggedIn = !!localStorage.getItem('user');

  if (!isLoggedIn) {
    alert('You must login first!');
    router.navigate(['/login']); 
  }
  return true; 
};
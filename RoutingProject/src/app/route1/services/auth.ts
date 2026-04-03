import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable({ providedIn: 'root' })

export class Auth{
 
  signup(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isUserRegistered(): boolean {
    return !!localStorage.getItem('user');
  }

  login(username: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.username === username && user.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  isAdmin(): boolean {
    return this.getCurrentUser().role === 'admin';
  }
}
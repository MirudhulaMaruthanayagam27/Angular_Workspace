import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  username: string;
  password: string;
  role: 'user' | 'admin' | 'super-admin';
}

@Injectable({ providedIn: 'root' })
export class Auth {
  getCurrentUser(): Observable<User | null> {
    const userStr = localStorage.getItem('userData');
    if (!userStr) return of(null);
    return of(JSON.parse(userStr) as User);
  }

  login(username: string, password: string, role: User['role']) {
    localStorage.setItem('userData', JSON.stringify({ username, password, role }));
  }

  logout() {
    localStorage.removeItem('userData');
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  /*username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Please enter both username and password!');
      return;
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser === this.username) {
      alert('Already logged in!');
      this.router.navigate(['/dashboard']);
      return;
    }

    localStorage.setItem('user', this.username);
    localStorage.setItem('pass', this.password); 

    alert('Login successful!');
    this.router.navigate(['/dashboard']);
  } */

  username = '';
  password = '';
  role: 'user' | 'admin' | 'super-admin' = 'user';

  constructor(private router: Router, private authService: Auth) {}

  login() {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Enter username and password');
      return;
    }

    this.authService.login(this.username, this.password, this.role);
    alert(`Logged in as ${this.username} (${this.role})`);
    this.router.navigate(['/admin/orders']); 
  }
}

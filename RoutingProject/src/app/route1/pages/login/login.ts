import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   username = '';
  password = '';
  role: 'user' | 'admin' = 'user';

  constructor(private auth: Auth, private router: Router) {}

  loginUser() {
    if (this.auth.login(this.username, this.password)) {
      if (this.auth.isAdmin()) this.router.navigate(['/dashboard/user-list']);
      else this.router.navigate(['/dashboard/cart']);
    } else {
      alert('Invalid credentials');
    }
  }
}

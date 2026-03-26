import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  imports: [FormsModule,
    RouterModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
   username = '';
  password = '';
  role: 'user' | 'admin' = 'user';

  constructor(private auth: Auth, private router: Router) {}

  signupUser() {
    this.auth.signup({ username: this.username, password: this.password, role: this.role });
    alert('Signup successful! Please login.');
    this.router.navigate(['/login']);
  }
  }


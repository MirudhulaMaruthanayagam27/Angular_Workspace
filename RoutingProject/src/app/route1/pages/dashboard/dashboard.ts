import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  currentUser: any;

  constructor(private auth: Auth, private router: Router) {
    this.currentUser = this.auth.getCurrentUser();
  }

  logout() {
    this.auth.logout();
  }
}

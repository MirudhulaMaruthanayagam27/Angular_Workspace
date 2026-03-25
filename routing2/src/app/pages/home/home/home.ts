import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); 
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']); 
  }

  goToUnsaved() {
    this.router.navigate(['/unsaved']); 
  }
  
  goOrders(){
    this.router.navigate(['/admin/orders']);
  }
  
  goProducts() {
    this.router.navigate(['/admin/products']);
  }

  goUsers() {
    this.router.navigate(['/admin/users']);
  }

}

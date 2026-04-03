import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './ngif.html',
  styleUrl: './ngif.css',
})
export class Ngif {
  isLoading = false;

  product = {
    name: 'iPhone 15',
    price: 80000,
    stock: 5
  };

  userRole = 'admin'; 

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}

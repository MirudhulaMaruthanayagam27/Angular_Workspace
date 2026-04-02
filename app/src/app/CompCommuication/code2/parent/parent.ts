import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';
@Component({
  selector: 'app-parent',
  imports: [CommonModule,Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  products = [
    { name: 'Shoes', price: 120, Stock: true },
    { name: 'Shirt', price: 50, Stock: false },
    { name: 'Watch', price: 250, Stock: true },
  ];
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServ } from '../productserv';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Products List</h2>
    <ul>
      <li *ngFor="let product of products">
        {{ product.id }} - {{ product.title }}
      </li>
    </ul>
  `
})
export class Productlistvalue implements OnInit {
  private productService = inject(ProductServ);
  products: any[] = [];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data: any[]) => this.products = data);
  }
}
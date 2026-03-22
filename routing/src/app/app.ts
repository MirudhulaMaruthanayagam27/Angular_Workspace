import { Component, signal } from '@angular/core';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { About } from './pages/about/about';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Home,
    Product,
    Cart,
    About
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('routing');
   
}

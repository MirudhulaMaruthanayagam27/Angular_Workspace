import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-child-products',
  imports: [RouterOutlet],
  templateUrl: './child-products.html',
  styleUrl: './child-products.css',
})
export class ChildProducts {
  constructor(private router: Router) {}

  open() {
    this.router.navigate(['/child-products', 101]);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  imports: [CommonModule, FormsModule],
  templateUrl: './home1.html',
  styleUrl: './home1.css',  
})
export class Home1 {
  products2 = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
    color: ['red', 'blue', 'green', 'yellow'][i % 4],
    size: ['S', 'M', 'L'][i % 3]
  }));

  filteredProducts2 = [...this.products2];

  selectedColors2: string[] = [];
  selectedSizes2: string[] = [];
  minPrice2: number = 0;
  maxPrice2: number = 2000;

  constructor(private router: Router) {}

  toggleColor2(color: string, event: any) {
    if (event.target.checked) this.selectedColors2.push(color);
    else this.selectedColors2 = this.selectedColors2.filter(c => c !== color);
  }

  toggleSize2(size: string, event: any) {
    if (event.target.checked) this.selectedSizes2.push(size);
    else this.selectedSizes2 = this.selectedSizes2.filter(s => s !== size);
  }

  applyFilters2() {
    this.filteredProducts2 = this.products2.filter(p =>
      (this.selectedColors2.length ? this.selectedColors2.includes(p.color) : true) &&
      (this.selectedSizes2.length ? this.selectedSizes2.includes(p.size) : true) &&
      (p.price >= this.minPrice2 && p.price <= this.maxPrice2)
    );
  }

  goToProduct2(p: any) {
    this.router.navigate(['/product2', p.id], { 
      queryParams: { color: p.color, size: p.size, price: p.price } 
    });
  }
}
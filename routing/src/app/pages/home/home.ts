import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    products = [
    { id: 101, name: 'Product A', price: 200, color: 'red', size: 'm' },
    { id: 102, name: 'Product B', price: 400, color: 'blue', size: 'l' },
    { id: 103, name: 'Product C', price: 150, color: 'red', size: 'l' },
  ];

  selectedColors: string[] = [];
  selectedSizes: string[] = [];
  minPrice: number = 0;
  maxPrice: number = 1000;

  toggleColor(color: string, event: any) {
    if (event.target.checked) {
      this.selectedColors.push(color);
    } else {
      this.selectedColors = this.selectedColors.filter(c => c !== color);
    }
  }

  toggleSize(size: string, event: any) {
    if (event.target.checked) {
      this.selectedSizes.push(size);
    } else {
      this.selectedSizes = this.selectedSizes.filter(s => s !== size);
    }
  }

  getParams() {
    return {
      color: this.selectedColors,
      size: this.selectedSizes,
      min: this.minPrice,
      max: this.maxPrice
    };
  }

}

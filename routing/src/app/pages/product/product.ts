import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  private route = inject(ActivatedRoute);

  productId: string = '';

  colors: string[] = [];
  sizes: string[] = [];
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor() {

    // Parammap
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
    });

    // Queryparammap
    this.route.queryParamMap.subscribe(params => {

      this.colors = params.getAll('color');   
      this.sizes = params.getAll('size');     

      this.minPrice = params.get('min') ? +params.get('min')! : null;
      this.maxPrice = params.get('max') ? +params.get('max')! : null;

      console.log("Colors:", this.colors);
      console.log("Sizes:", this.sizes);
      console.log("Price:", this.minPrice, this.maxPrice);
    });
  }
}

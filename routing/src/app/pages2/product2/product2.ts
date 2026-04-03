import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product2',
  imports: [CommonModule],
  templateUrl: './product2.html',
  styleUrls: ['./product2.css'],
})
export class Product2 {
  productId2: string = '';
  color2: string = '';
  size2: string = '';
  price2: number = 0;

  relatedProducts2: any[] = [];

  allProducts2 = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
    color: ['red','blue','green','yellow'][i % 4],
    size: ['S','M','L'][i % 3]
  }));

  constructor(public route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId2 = params.get('id') || '';
      this.loadRelated2();
    });

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.color2 = queryParams.get('color') || '';
      this.size2 = queryParams.get('size') || '';
      this.price2 = +(queryParams.get('price') || 0);
    });
  }

  loadRelated2() {
    this.relatedProducts2 = this.allProducts2
      .filter(p => p.id != +this.productId2)
      .slice(0,5);
  }

  goToProduct2(p: any) {
    this.router.navigate(['/product2', p.id], {
      queryParams: { color: p.color, size: p.size, price: p.price }
    });
  }

  getCurrentUrl2() {
    return this.router.url;
  }
}
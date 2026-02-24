import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products$: Observable<any[]>;
  searchTerm: string = '';

  constructor(private http: HttpClient) {
    this.products$ = this.http.get<any[]>('https://fakestoreapi.com/products')
      .pipe(shareReplay(1));

    // Debug log to ensure HTTP works
    this.products$.subscribe({
      next: data => console.log('Products fetched:', data),
      error: err => console.error('HTTP error:', err)
    });
  }

  get filteredProducts$(): Observable<any[]> {
    return this.products$.pipe(
      map(products =>
        products.filter(p =>
          p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProService {

  constructor() {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cartSubject.next(this.items);
    }
  }
}
  private items: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addTocart(product: Product) {
  const alreadyExists = this.items.find(
    item => item.id === product.id
  );
  if (!alreadyExists) {
    this.items.push(product);

    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    this.cartSubject.next([...this.items]);
  }
}

  removeFromcart(index: number) {
  this.items.splice(index, 1);

  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  this.cartSubject.next([...this.items]);
}


}
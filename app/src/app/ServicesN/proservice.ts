import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Productin {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})

export class Proservice {
  constructor(){
    if (typeof window !== 'undefined'){
      const savedCart = localStorage.getItem('cart');
      if (savedCart){
        this.items = JSON.parse(savedCart);
        this.cartSubject.next(this.items);
      }
  }
}

private items: Productin[] = [];
private cartSubject = new BehaviorSubject<Productin[]>([]);
cart$ = this.cartSubject.asObservable();

addtocart(product: Productin){
  const alreadyExists = this.items.find(
  item => item.id === product.id
);

if(!alreadyExists){
  this.items.push(product);
  if(typeof window !== 'undefined'){
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  this.cartSubject.next([...this.items]);

  }
}

removefromcart(index: number){
  this.items.splice(index, 1);
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  this.cartSubject.next([...this.items]);
}
}
import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class Productservice {
  constructor(){}
  getproducts():Product[]{
    return[
      new Product(1,'Laptop',50000),
      new Product(2,'Laptop2',60000),
      new Product(3,'Laptop3',70000)
    ];
  }
}

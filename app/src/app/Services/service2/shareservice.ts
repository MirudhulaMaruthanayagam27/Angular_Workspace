import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Shareservice {
  
  private products : string[]=['electronics','Jewellery','Clothes'];

  constructor(){}

  getproducts():string[] {
    return this.products;
  }

  addproducts(product:string){
    this.products.push(product);
  }
}

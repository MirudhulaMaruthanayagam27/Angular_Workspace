import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {H1pcart} from '../h1pcart/h1pcart';
interface Product{
  id:number;
  name:string;
  price:number;
}
@Component({
  selector: 'app-h1plist',
  standalone:true,
  imports: [H1pcart,CommonModule],
  templateUrl: './h1plist.html',
  styleUrl: './h1plist.css',
})
export class H1plist {
  products:Product[]=[
    {id:1,name:'Laptop',price:10000},
    {id:2,name:'Mobile',price:120000},
    {id:3,name:'Jewellery',price:20000},
  ];
  cart: Product[]=[];
  pricefilter=1000000;
 
  get filterProduct(){
    return this.products.filter(p => p.price <this.pricefilter)
  }
  addTocart(product :Product){
    this.cart.push(product);
  }
}

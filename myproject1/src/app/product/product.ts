import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Productcard} from '../productcard/productcard';
@Component({
  selector: 'app-product',
  imports: [CommonModule, Productcard ],
  standalone:true,
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {
  products=[
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},
    {name:'Laptop', price:50000},
    {name:'Electronics', price:20000},{name:'Laptop', price:50000},
    {name:'Electronics', price:20000}
  ];
}

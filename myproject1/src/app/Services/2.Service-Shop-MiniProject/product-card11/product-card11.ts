import { Component } from '@angular/core';
import { ProService } from '../pro-service';
import { Product } from '../pro-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card11',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-card11.html',
  styleUrl: './product-card11.css',
})
export class ProductCard11 {
  products: Product[]=[
    {id:1,name:'laptop',price:20000},
    {id:2,name:'electronics',price:3000},
    {id:3,name:'electronics2',price:30000},
    {id:4,name:'laptop',price:20000},
    {id:5,name:'electronics',price:3000},
    {id:6,name:'electronics2',price:30000}
  ];
  constructor(private cartservice:ProService){}
  add(product:Product){
    this.cartservice.addTocart(product);
    
  }
  //constructor:Store it in this.cartService,Make it available inside component
 
}

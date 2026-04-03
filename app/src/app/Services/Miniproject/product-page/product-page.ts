import { Component } from '@angular/core';
import { Productin, Proservice } from '../../../ServicesN/proservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  standalone: true,   
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  products:Productin[] =[
    {id:1,name:'laptop',price:20000},
    {id:2,name:'electronics',price:3000},
    {id:3,name:'electronics2',price:30000},
    {id:4,name:'laptop',price:20000},
    {id:5,name:'electronics',price:3000},
    {id:6,name:'electronics2',price:30000}
  ]
  constructor(private proservice:Proservice){}
  add(product:Productin){
    this.proservice.addtocart(product);
  }

}

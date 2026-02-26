import { Component, OnInit } from '@angular/core';
import { ProService } from '../pro-service';
import { Product } from '../pro-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list11',
  imports: [CommonModule],
  templateUrl: './product-list11.html',
  styleUrl: './product-list11.css',
})
export class ProductList11 implements OnInit{
  items: Product []=[];
  constructor(private service:ProService){}

  ngOnInit(){
    this.service.cart$.subscribe(data=>
    {
      this.items=data;
    }
    )
  }
  remove(index:number){
    this.service.removeFromcart(index);
  }

}

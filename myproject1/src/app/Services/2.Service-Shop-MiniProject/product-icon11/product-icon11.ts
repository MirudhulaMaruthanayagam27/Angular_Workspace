import { Component,OnInit } from '@angular/core';
import { ProService } from '../pro-service';
@Component({
  selector: 'app-product-icon11',
  imports: [],
  templateUrl: './product-icon11.html',
  styleUrl: './product-icon11.css',
})
export class ProductIcon11 implements OnInit{
  count=0;
  constructor(private service:ProService){}
  ngOnInit(){
    this.service.cart$.subscribe(items =>
    {
      this.count=items.length;

    }
    )

  }
}

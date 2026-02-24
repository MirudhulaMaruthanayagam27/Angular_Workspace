import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product{
  id:number;
  name:string;
  price:number;
}
@Component({
  selector: 'app-h1pcart',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './h1pcart.html',
  styleUrl: './h1pcart.css',
})
export class H1pcart implements OnChanges{
  @Input() cartitems:Product[]=[];
  total=0;
  discount=0;
  finalAmount=0;
  ngOnChanges(changes: SimpleChanges) {
    if(changes['cartitems']){
      this.totalcalc();
    }
  }
  totalcalc(){
    this.total=0;
    for(let item of this.cartitems){
      this.total+=item.price;
    }

    if (this.total > 100000) {
      this.discount = this.total * 0.1;
    } else {
      this.discount = 0;
    }

    this.finalAmount = this.total - this.discount;
  
  }


}

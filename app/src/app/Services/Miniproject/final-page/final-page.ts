import { Component, OnInit } from '@angular/core';
import { Proservice } from '../../../ServicesN/proservice';
import { Productin } from '../../../ServicesN/proservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-final-page',
  imports: [CommonModule],
  standalone: true,   
  templateUrl: './final-page.html',
  styleUrl: './final-page.css',
})
export class FinalPage implements OnInit {
  items: Productin[] =[];
  constructor(private finalp:Proservice){
  }

  ngOnInit(){
    this.finalp.cart$.subscribe(data=>{
      this.items=data;
    }
    )
  }
  remove(index:number){
    this.finalp.removefromcart(index);
  }
}

import { Component, OnInit } from '@angular/core';
import { Proservice } from '../../../ServicesN/proservice';
@Component({
  selector: 'app-icon-c',
  imports: [],
  templateUrl: './icon-c.html',
  styleUrl: './icon-c.css',
})
export class IconC implements OnInit{
  count=0;
  constructor(private service:Proservice){}
  ngOnInit(){
    this.service.cart$.subscribe(items =>
    {
      this.count=items.length;
    }
    )
  }



}

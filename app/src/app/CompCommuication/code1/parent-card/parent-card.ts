import { Component } from '@angular/core';
import { ChildCard } from '../child-card/child-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent-card',
  imports: [ChildCard,CommonModule],
  standalone:true,
  templateUrl: './parent-card.html',
  styleUrl: './parent-card.css',
})
export class ParentCard {
  users= [
    {name:'Alice',age:20},
    {name:'Bob',age:30}
  ];
}

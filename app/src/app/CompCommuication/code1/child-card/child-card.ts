import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-card',
  imports: [],
  standalone:true,
  templateUrl: './child-card.html',
  styleUrl: './child-card.css',
})
export class ChildCard {
  @Input() username!:string;
  @Input() userage!:number;

}

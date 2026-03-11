import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tablefor',
  imports: [CommonModule],
  templateUrl: './tablefor.html',
  styleUrl: './tablefor.css',
})
export class Tablefor {
  producttable=[
    {name:"laptop",price:80000},
    {name:"electronics",price:75000}
  ];
}

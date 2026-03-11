import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listngfor',
  imports: [CommonModule],
  templateUrl: './listngfor.html',
  styleUrl: './listngfor.css',
})
export class Listngfor {
  productfor=[
    {name:"laptop",price:80000},
    {name:"electronics",price:75000}
  ];
}

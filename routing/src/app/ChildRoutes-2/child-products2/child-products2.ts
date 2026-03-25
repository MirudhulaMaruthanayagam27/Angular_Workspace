import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-child-products2',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './child-products2.html',
  styleUrl: './child-products2.css',
})
export class ChildProducts2 {

  products= [
    { id: 101, name: 'iPhone', price: 80000 },
    { id: 102, name: 'Samsung', price: 60000 },
    { id: 103, name: 'OnePlus', price: 50000 }
  ];

  constructor(private router :Router){}

  openproduct(id: number){
    this.router.navigate(['/child-products2',id]);
  }

}

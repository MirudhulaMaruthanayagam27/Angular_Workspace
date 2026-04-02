import { Component, OnInit } from '@angular/core';
import { Appgit3service ,Productget3} from '../appgit3service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appgit3',
  imports: [CommonModule],
  templateUrl: './appgit3.html',
  styleUrl: './appgit3.css',
})
export class Appgit3  implements OnInit{
  products:Productget3[]=[];

  constructor(private app3service:Appgit3service ){}

  ngOnInit(){
    this.app3service.getProducts().subscribe((data) => {
      this.products=data;
    });
  }
}

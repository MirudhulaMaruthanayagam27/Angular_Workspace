import { Component } from '@angular/core';
import { Httpgetserv } from '../httpgetserv';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-httpsg1',
  imports: [CommonModule],
  templateUrl: './httpsg1.html',
  styleUrl: './httpsg1.css',
})
export class Httpsg1 {
  products: any[]=[];

  constructor(private get1serv: Httpgetserv){}

  ngOnInit() {
  this.get1serv.getProducts().subscribe((data: any) => {
    this.products=data;
    console.log(this.products);
    });
  }
  objectKeys(obj :any){
    return Object.keys(obj);
}

}
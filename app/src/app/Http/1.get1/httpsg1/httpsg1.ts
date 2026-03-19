import { Component } from '@angular/core';
import { Httpgetserv } from '../httpgetserv';
@Component({
  selector: 'app-httpsg1',
  imports: [],
  templateUrl: './httpsg1.html',
  styleUrl: './httpsg1.css',
})
export class Httpsg1 {

  products: any[]=[];

  constructor(private get1serv: Httpgetserv){}

  ngOnInit() {
  this.get1serv.getProducts().subscribe((data: any) => {
      console.log(this.products);
    });

}

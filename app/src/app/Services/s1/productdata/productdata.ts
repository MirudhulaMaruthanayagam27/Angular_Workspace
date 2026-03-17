import { Component, OnInit } from '@angular/core';
import { Productservice } from '../productservice';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productdata',
  //standalone:true,
  imports: [FormsModule],
  templateUrl: './productdata.html',
  styleUrl: './productdata.css',
})
export class Productdata implements OnInit {
  products:Product[]=[];
  constructor(private productservice :Productservice ){}
  ngOnInit():void{
    this.products=this.productservice.getproducts();
  }

}

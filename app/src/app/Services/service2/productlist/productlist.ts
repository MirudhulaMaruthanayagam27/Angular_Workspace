import { Component,OnInit } from '@angular/core';
import { Shareservice } from '../shareservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productlist',
  imports: [CommonModule,FormsModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {

  products:string[]=[];
  newpro:string='';

  constructor(private shareservice : Shareservice){}
  ngOnInit(){
    this.products=this.shareservice.getproducts();
  }

  addnewpro(){
    if(this.newpro){
      this.shareservice.addproducts(this.newpro);
      this.products=this.shareservice.getproducts();
      this.newpro='';
  }
  }
}

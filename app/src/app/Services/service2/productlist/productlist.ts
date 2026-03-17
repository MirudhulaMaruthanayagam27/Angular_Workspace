import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shareservice } from '../shareservice';
@Component({
  selector: 'app-productlist',
  imports: [FormsModule],
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

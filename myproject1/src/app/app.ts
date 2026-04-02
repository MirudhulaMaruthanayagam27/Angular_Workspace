import { Component, signal } from '@angular/core';

//import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import { Post } from './api/post/post';

//Form1-Template Driven Forms
import { Form1 } from './Forms/form1/form1';
//Form2-Template Driven-set val
import { Form2 } from './Forms/form2/form2';
//Form3-Reactive forms
import { Form3 } from './Forms/form3/form3';

//libapp
import { Libapp } from './Services/1.ServiceLib/libapp/libapp';

//Mini shop cart
import { ProductCard11 } from './Services/2.Service-Shop-MiniProject/product-card11/product-card11';
import { ProductIcon11 } from './Services/2.Service-Shop-MiniProject/product-icon11/product-icon11';
import { ProductList11 } from './Services/2.Service-Shop-MiniProject/product-list11/product-list11';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Navbar,Product,Footer,Post,
    Form1,Form2,Form3,
    Libapp,
    ProductCard11,ProductIcon11,ProductList11
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}




import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import { Post } from './api/post/post';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Navbar,Product,Footer,Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

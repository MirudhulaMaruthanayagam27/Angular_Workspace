import { Component } from '@angular/core';
import { Library } from '../../library';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-libapp',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './libapp.html',
  styleUrl: './libapp.css',
})
export class Libapp {

  books:string[]=[];
  newBook='';
  constructor(private library:Library){
    this.books=this.library.getBook();
  }
  addBook(){
    this.library.addBook(this.newBook);
    this.books=this.library.getBook();
    this.newBook='';
  }


}

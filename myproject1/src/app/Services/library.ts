import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Library {
  private books: string[] =['Angular','Java','Python'];
  constructor(){
  }
  addBook(book:string){
    this.books.push(book);
  }
  getBook(){
    return this.books;
  }
}

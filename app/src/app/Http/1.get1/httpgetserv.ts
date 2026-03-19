import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Httpgetserv {
  private apiurl="https://jsonplaceholder.typicode.com/posts";

  constructor(private https:HttpClient){}
  
  getProducts(){
    return this.https.get(this.apiurl);
  }
}

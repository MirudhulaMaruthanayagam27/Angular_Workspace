import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Post {
    constructor(private http: HttpClient) {}
    getPost(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
}

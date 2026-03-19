import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Post1Interface{
  name:string,
  email:string,
  password:string;
}

@Injectable({
  providedIn: 'root',
})

export class Post1service {
  private post1api= 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient){}

  register(user :Post1Interface) :Observable<Post1Interface>{
    return this.http.post<Post1Interface>(this.post1api,user);
  }
}

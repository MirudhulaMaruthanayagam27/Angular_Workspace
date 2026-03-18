import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Userservicecls {
  private api = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient){}
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.api}/users`);
  }
}

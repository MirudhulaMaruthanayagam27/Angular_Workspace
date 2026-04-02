import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone?:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  updateUser(userId: number, updateddata: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${userId}`, updateddata);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-async1',
  imports: [CommonModule],
  templateUrl: './async1.html',
  styleUrl: './async1.css',
})
export class Async1 {

  users$:Observable<any[]>;

  constructor(private http: HttpClient){
    this.users$ = this.http.get<(any[])>('https://jsonplaceholder.typicode.com/users');
  }

}

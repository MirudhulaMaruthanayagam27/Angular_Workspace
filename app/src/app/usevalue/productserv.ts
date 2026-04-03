import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './config';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductServ {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.config.productApi);
  }
}
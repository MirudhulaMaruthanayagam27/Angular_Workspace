import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productdata } from '../../Services/service1/productdata/productdata';
import { map } from 'rxjs';
export interface Productget3{
  name:string,
  price:number,
  stock:number,
  isAvailable:boolean;
}

@Injectable({
  providedIn: 'root',
})

export class Appgit3service {

  private api='https://fakestoreapi.com/products';

  constructor(private http:HttpClient){}

  getProducts():Observable<Productget3[]>{
    return this.http.get<any[]>(this.api)
    .pipe(
        map((productdata) => {
          return productdata.map((p) => ({
            name: p.title,                 
            price: p.price,
            stock: p.rating?.count || 0,  
            isAvailable: (p.rating?.count || 0) > 0
          }));
        }));
  }
  }


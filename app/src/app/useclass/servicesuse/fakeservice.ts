import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Fakeservice {
  private users:User[]=[
    {id:1, name:'User1', email :'miru@gmail.com'},
    {id:2, name:'User2', email :'miruuser2@gmail.com'},
  ];
  
  getUsers():Observable<User[]>{
    return of(this.users);
  }
}

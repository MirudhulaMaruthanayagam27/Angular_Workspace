import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  name :string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root',
})

export class Authenticationservice {
  private key='users';

  //getuser
  getUsers(): User[] {
  const data = localStorage.getItem(this.key);
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } 
  catch {
    return [];
  }
}
  //signup
  register(user: User): string {
  let users = [];
  const data = localStorage.getItem('users');
  if(data){
    return 'Already signup done';
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  console.log("Saved:", users);
  return 'Signup success';
}
  //login check
  login(email:string ,password:string){
    const users=this.getUsers();
    const user=users.find(u => u.email==email && u.password==password);
    if(user){
      localStorage.setItem(this.key,JSON.stringify(user));
      return 'Login success';
  }
  return 'Invalid';
}
}



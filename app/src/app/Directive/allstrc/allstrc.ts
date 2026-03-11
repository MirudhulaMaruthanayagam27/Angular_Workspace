import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-allstrc',
  imports: [CommonModule],
  templateUrl: './allstrc.html',
  styleUrl: './allstrc.css',
})
export class Allstrc {
  islogin=false;

  users = [
    {name: 'Alice', age: 25, city: 'Chennai', role: 'admin'},
    {name: 'Bob', age: 30, city: 'Bangalore', role: 'user'},
    {name: 'Charlie', age: 28, city: 'Coimbatore', role: 'manager'},
    {name: 'Charlie', age: 24, city: 'Coimbatore'}
  ];
  login(){
    this.islogin=true;
  }
  logout(){
    this.islogin=false;
  }
}

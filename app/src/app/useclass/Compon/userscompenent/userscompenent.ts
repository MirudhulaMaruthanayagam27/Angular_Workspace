import { Component, OnInit } from '@angular/core';
import { Userservicecls } from '../../servicesuse/userservicecls';
import { Fakeservice } from '../../servicesuse/fakeservice';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

//const IS_PROD=false;
const IS_PROD = true; 

@Component({
  selector: 'app-userscompenent',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './userscompenent.html',
  styleUrls: ['./userscompenent.css'],
  providers: [
    {
      provide: Userservicecls,
      useClass: IS_PROD ? Userservicecls : Fakeservice
    }
  ]
})
export class Userscompenent implements OnInit {
  users: User[] = [];
  constructor(private userService: Userservicecls) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log('Users loaded:', data);
    });
  }
}
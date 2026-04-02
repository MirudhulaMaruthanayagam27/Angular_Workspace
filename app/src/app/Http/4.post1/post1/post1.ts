import { Component } from '@angular/core';
import { Post1service,Post1Interface } from '../post1service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post1',
  imports: [CommonModule,FormsModule],
  templateUrl: './post1.html',
  styleUrl: './post1.css',
})
export class Post1 {

  user:Post1Interface={
    name:'',
    email:'',
    password:''
  };

  message='';
  
  constructor(private postserv:Post1service){}
  
  Onsubmit(){
    this.postserv.register(this.user)
    .subscribe({
      next :(res) =>{
        console.log(res);
        this.message="Success";
      },
      error : (err) =>{
        console.log('Error',err);
      }
    });
  }
}

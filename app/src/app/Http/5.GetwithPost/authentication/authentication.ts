import { Component } from '@angular/core';
import { Authenticationservice,User } from '../authenticationservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-authentication',
  imports: [CommonModule,FormsModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {

  isLogin=true;

  user :User={
    name:'',
    email:'',
    password: ''
  };

  confirmpassword='';
  message='';

  constructor(private auth:Authenticationservice){}

  toggle(){
    this.isLogin=!this.isLogin;
    this.message='';
  }

  signup(){
    if(this.user.password!==this.confirmpassword){
      this.message='Not matched password';
      return;
    }
    this.message=this.auth.register(this.user);
  }

  login(){
    this.message=this.auth.login(this.user.email, this.user.password );
  }
}

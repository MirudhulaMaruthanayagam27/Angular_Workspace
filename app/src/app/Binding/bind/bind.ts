import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  standalone:true,
  imports: [],
  templateUrl: './bind.html',
  styleUrl: './bind.css',
})
export class Bind {
  image1='image1.jpg';
  isFollowed:boolean=false;
  followuser(){
    this.isFollowed=true;
  }

}

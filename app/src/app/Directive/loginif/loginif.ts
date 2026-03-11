import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loginif',
  imports: [CommonModule],
  templateUrl: './loginif.html',
  styleUrl: './loginif.css',
})
export class Loginif {
  isloggedin=true;
  login1(){
    this.isloggedin=true;
  }
}

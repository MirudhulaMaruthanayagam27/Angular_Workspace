import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-switchrole',
  imports: [CommonModule],
  templateUrl: './switchrole.html',
  styleUrl: './switchrole.css',
})
export class Switchrole {
  role='Manager'
  orderStatus='pending'
}

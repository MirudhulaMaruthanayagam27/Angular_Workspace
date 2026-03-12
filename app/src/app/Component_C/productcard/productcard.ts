import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productcard',
  imports: [CommonModule],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
   
 @Input() product:any;

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-msgif',
  imports: [CommonModule],
  templateUrl: './msgif.html',
  styleUrl: './msgif.css',
})
export class Msgif {
  messages:String[]=["hi","hello"]
  //messages:String[]=[]
}

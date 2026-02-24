import { Component } from '@angular/core';
import {Color} from '../directive/color';
@Component({
  selector: 'app-customdire',
  standalone:true,
  imports: [ Color],
  templateUrl: './customdire.html',
  styleUrl: './customdire.css',
})
export class Customdire {

}

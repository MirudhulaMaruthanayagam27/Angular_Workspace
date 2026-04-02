import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcc',
  imports: [],
  templateUrl: './childcc.html',
  styleUrl: './childcc.css',
})
export class Childcc {
  @Input() name!:string;
  @Input() productname!:string;
  @Input() price!:number;
  @Input() quantity!:number;
}

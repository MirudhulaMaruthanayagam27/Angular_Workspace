import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Childcc } from '../childcc/childcc';
@Component({
  selector: 'app-parentcc',
  imports: [CommonModule,Childcc],
  templateUrl: './parentcc.html',
  styleUrl: './parentcc.css',
})
export class Parentcc {

  userdata=[
    {name:'Athulya',productname:'Electronics',price:1400,quantity:1},
    {name:'Abi',productname:'Electronics12',price:1500,quantity:1},
    {name:'Aakash',productname:'Electronics13',price:1600,quantity:1}
  ];

}

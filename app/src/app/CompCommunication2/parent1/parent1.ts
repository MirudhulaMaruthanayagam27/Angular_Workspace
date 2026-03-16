import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';
@Component({
  selector: 'app-parent1',
  imports: [Child1],
  templateUrl: './parent1.html',
  styleUrl: './parent1.css',
})
export class Parent1 {
  parentmessage = 'hi';
}

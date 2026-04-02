import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-timer',
  //standalone:true,
  imports: [AsyncPipe],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  time$ =interval(1000);
}

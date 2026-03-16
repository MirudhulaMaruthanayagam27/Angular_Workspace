import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [Output,EventEmitter],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  @Output() notify = new EventEmitter<string>();
  sendmsg(){
    this.notify.emit("Hello Parent");
  }

}

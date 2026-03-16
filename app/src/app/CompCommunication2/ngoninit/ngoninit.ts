import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ngoninit',
  imports: [],
  templateUrl: './ngoninit.html',
  styleUrl: './ngoninit.css',
})
export class Ngoninit implements OnInit {
  username: string = '';

  ngOnInit() {
    this.username = 'Mirudhula';
    console.log('ngOnInit: username set');
}
}

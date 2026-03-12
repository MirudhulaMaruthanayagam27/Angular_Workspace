import { Component } from '@angular/core';
import { PipecustomPipe } from '../pipecustom-pipe';
@Component({
  selector: 'app-pipe1',
  imports: [PipecustomPipe],
  templateUrl: './pipe1.html',
  styleUrl: './pipe1.css',
})
export class Pipe1 {
  
}

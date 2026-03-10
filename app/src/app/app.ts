import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Component/navbar/navbar';
import { Videopage } from './Component/videopage/videopage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Videopage,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}

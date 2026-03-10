import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from './Component/navbar/navbar';
import { Videopage } from './Component/videopage/videopage';
import { Bind } from './Binding/bind/bind';
import { Classbind } from './Binding/classbind/classbind';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Videopage,Navbar,Bind,Classbind,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}

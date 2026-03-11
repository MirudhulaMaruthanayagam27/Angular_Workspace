import { Component } from '@angular/core';
//directive hostbind,hostlistener
import { Highlight } from '../../Directivecustom/hightlight';
@Component({
  selector: 'app-direct',
  imports: [Highlight],
  templateUrl: './direct.html',
  styleUrl: './direct.css',
})
export class Direct {

}

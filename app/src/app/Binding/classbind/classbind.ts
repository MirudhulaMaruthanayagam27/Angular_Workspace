import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-classbind',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './classbind.html',
  styleUrl: './classbind.css',
})
export class Classbind {
  username:string='';
}

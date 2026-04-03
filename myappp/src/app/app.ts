import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ngif } from './5.ngif/ngif';
import {Products} from './products/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,       
  imports: [FormsModule,BrowserModule,Products,Ngif]    ,
    
})
export class App {
  
}



/*import { Component } from '@angular/core';
import { Products } from './products/products';
import { FormsModule } from '@angular/forms';
//import { H1plist } from './6.ngOnchanges/h1plist';
import { Form1 } from './Forms/Form1/form1/form1';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Products, FormsModule,Form1],
  template: `
    <h1>Products List</h1>
    <app-products></app-products>
  `
})
export class App {
  showChat = true;
  username = 'Alice';
  notification = 'Welcome!';

  toggleChat() { this.showChat = !this.showChat; }
  changeUsername() { this.username = this.username === 'Alice' ? 'Bob' : 'Alice'; }
  changeNotification() { this.notification = this.notification === 'Welcome!' ? 'New Message!' : 'Welcome!'; }
}
*/

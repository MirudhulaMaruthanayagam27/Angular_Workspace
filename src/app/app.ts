import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Forms
import { SignupForm } from './Forms/signup-form/signup-form';
import { Login } from './Forms/login/login';
import { ProfileForm } from './Forms/profile-form/profile-form';
import { Filter } from './Forms/filter/filter';
import { Checkout } from './Forms/checkout/checkout';
import { Feedback } from './Forms/feedback/feedback';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    //Template-Forms
    Login,
    SignupForm,
    ProfileForm,
    Filter,
    Checkout,
    Feedback  
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-app');
}
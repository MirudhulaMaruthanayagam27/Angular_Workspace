import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form1',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './form1.html',
  styleUrl: './form1.css',
})
export class Form1 {
  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);
    form.reset();
  }
}

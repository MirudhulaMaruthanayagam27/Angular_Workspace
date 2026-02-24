import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form2',
  imports: [FormsModule,CommonModule],
  templateUrl: './form2.html',
  styleUrl: './form2.css',
})
export class Form2 implements OnInit {
  contact:any;
  ngOnInit(){
    this.contact={
      name:"miru",
      email:"mirudhula864@gmail.com",
      country:"2"
    };
  }
   onSubmit(form: NgForm) {
    console.log("Form Submitted:", form.value);
  }
  changeval(){
    this.contact.name="UpdatedName";
    this.contact.country="1";
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form3',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form3.html',
  styleUrl: './form3.css',
})
export class Form3 {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    emails: new FormArray([ new FormControl('', [Validators.required, Validators.email]) ]),
    phones: new FormArray([ new FormControl('', Validators.required) ])
  });

  // Getters for FormArrays
  get emails(): FormArray {
    return this.contactForm.get('emails') as FormArray;
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  // Add Email
  addEmail() {
    this.emails.push(new FormControl('', [Validators.required, Validators.email]));
  }

  // Remove Email
  removeEmail(index: number) {
    if(this.emails.length > 1) { // keep at least one
      this.emails.removeAt(index);
    }
  }

  // Add Phone
  addPhone() {
    this.phones.push(new FormControl('', Validators.required));
  }

  // Remove Phone
  removePhone(index: number) {
    if(this.phones.length > 1) { // keep at least one
      this.phones.removeAt(index);
    }
  }

  // Submit
  submit() {
    if(this.contactForm.valid){
      console.log("Form Submitted ✅", this.contactForm.value);
      alert("Form Submitted! Check console for data.");
    } else {
      console.log("Form Invalid ❌", this.contactForm);
      this.contactForm.markAllAsTouched(); // show validation messages
    }
  }
}
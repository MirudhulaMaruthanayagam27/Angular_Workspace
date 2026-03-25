import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../../guards/unsaved-guard';
@Component({
  selector: 'app-unsaved',
  imports: [FormsModule],
  templateUrl: './unsaved.html',
  styleUrl: './unsaved.css',
})
export class Unsaved  implements CanComponentDeactivate {
  name = '';
  saved = false;

  save() {
    this.saved = true; 
    alert('Data saved!');
  }

  hasUnsavedChanges(): boolean {
    return !this.saved && this.name.trim().length > 0;
  }

}

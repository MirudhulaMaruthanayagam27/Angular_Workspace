import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') textColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'red';       // hover background
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '';          // remove hover
    this.textColor = '';        // reset text
  }

  @HostListener('click') onClick() {
    this.bgColor = 'darkblue';  // click background
    this.textColor = 'white';   // click text
  }
}
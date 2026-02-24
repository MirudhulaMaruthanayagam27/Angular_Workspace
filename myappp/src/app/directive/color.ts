import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone:true
})
export class Color {

  constructor(private el : ElementRef) {}
  /*export class Color {
  constructor(private el: ElementRef) {}

  Think Like This :
  class Color {

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }
this.el = <h2> element
el = ElementRef
nativeElement = actual real HTML element
this.el         → box
this.el.nativeElement → box inside iruka real element
}
}*/
    @HostListener('mouseenter')
    onEnter(){
      this.el.nativeElement.style.color = 'red';
    }
    @HostListener('mouseleave')
    onLeave(){
      this.el.nativeElement.style.color='black';
    }

}

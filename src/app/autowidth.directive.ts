import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAutowidth]'
})
export class AutowidthDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyUp() {
    this.resize();
  }

  @HostListener('focus') onFocus() {
    this.resize();
  }

  private resize() {
    this.el.nativeElement.setAttribute('size', this.el.nativeElement.value.length);
  }

}

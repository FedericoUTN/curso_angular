import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective {

  constructor(private elem : ElementRef) { 
    
  }

  @HostListener('mouseenter')
  onMouseenter() {
    this.elem.nativeElement.style.visibility = 'hidden';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elem.nativeElement.style.visibility = 'visible';
  }

}

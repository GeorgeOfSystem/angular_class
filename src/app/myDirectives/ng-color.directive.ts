import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color : string;
  @Input() secondColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('mouse Enter')
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseleave(){
    console.log('mouse Leave')
    this.changeColor(this.secondColor);
  }


  constructor(private el : ElementRef) {
    this.changeColor("yellow");
   }

   changeColor( color : string ){
     this.el.nativeElement.style.backgroundColor = color;
   }
}
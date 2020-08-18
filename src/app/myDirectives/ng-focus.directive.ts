import { Directive, Output, HostListener, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {

  @Output() appNgFocus = new EventEmitter();
  
  @HostListener('document:click', ['$event', '$event.target']) clickOutside(event, eventTarget){
    console.log('NgFocusDirective Test',this.el.nativeElement.contains(eventTarget))

    const aux = this.el.nativeElement.contains(eventTarget);

    if(!aux){
      this.appNgFocus.emit('se hizo click afuera')
    }
  }

  constructor(private el : ElementRef) {

   }

}
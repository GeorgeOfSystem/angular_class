import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class myNgElseDirective implements OnInit {
  @Input() 
  set ngElse(condition: boolean){
    if(condition){
      this.viewContainer.clear(); 
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);  
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  ngOnInit(){

  }

}
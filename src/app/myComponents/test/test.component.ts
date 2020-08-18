import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'testPerson',
  template: `
  <div style="border: 1px solid red;">
  <p>Name: {{name}}</p>
  <p>Lastname: {{lastname}}</p>
  </div>`
})
export class TestComponent implements OnInit,OnChanges,OnDestroy {
  intermedearia:string;
  @Input()
    get name(){
      return this.intermedearia;
    }
    set name( name : string ){
      this.intermedearia = 'Muy buenos días ' + name +' Este es un set';
    }

  @Input() lastname:string;


  constructor() { 

  }

  ngOnInit() {
    console.log('onInit', this.name);
  }

  ngOnChanges(change : SimpleChange){
    if(change && change.lastname && change.lastname.currentValue){
      console.log("on change", change.lastname.currentValue);
      const aux = 'AAAH dio´mio' + change.lastname.currentValue;
      this.lastname = aux;
    }
  }


  ngOnDestroy(){
    console.log("on destroy")
  }

  onClickSave(){
    this.saveEvent.emit({
      name: this.name,
      age: this.age,
      description: this.description,
    });
  }
}
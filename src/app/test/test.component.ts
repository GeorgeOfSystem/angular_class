import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name : string = 'Nicole';
  age : number = 20;
  description : string = 'ocupation';

  @Output() saveEvent = new EventEmitter();

  

  constructor() { 

  }

  ngOnChanges(){
    console.log('onChange');
  }

  ngOnInit() {
    console.log('onInit');
  }

  onClickSave(){
    this.saveEvent.emit({
      name: this.name,
      age: this.age,
      description: this.description,
    });
  }
}
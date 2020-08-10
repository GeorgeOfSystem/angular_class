import { 
  Component, 
  Input,
  OnInit, 
  OnChanges,
  DoCheck, 
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-do-check',
  template: `
  <div style="border: 1px solid red;">
  <p>do-check works!</p>
  <p><input type="text" [value]="name" ></p>
  {{name}}
  <p> Destroy </p>
  <button (click)="sw = false;">Change</button>
  </div>`
})
export class DoCheckComponent implements OnInit, OnChanges,DoCheck,AfterViewChecked,AfterViewInit, OnDestroy {

  @Input() name : string;

  constructor() { }

  ngOnInit() {
    console.log('On Init');
  }

  ngOnChanges(){
    console.log('On Changes');
  }
  ngDoCheck(){
    console.log('Do Check');
  }
  ngAfterViewChecked(){
    console.log('After View Checked');
  }
  ngAfterViewInit(){
    console.log('After View Init');
  }
  ngOnDestroy(){
    console.log('destroy')
  }
}
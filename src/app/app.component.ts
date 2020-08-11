import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-class';
  sw=true;
  persons = ['Nicole', 'Jorge', 'Daniela', 'Ignacio']
  
  aux = 3;
  auxColor = 'red';
  auxClass = true;

  people = [
    {
      name: 'Nicole',
      lastName: 'Arcienega',
      age: 20,
      enable: true
    },
    {
      name: 'Daniela',
      lastName: 'Angles',
      age: 19,
      enable: false
    },
    {
      name: 'Jorge',
      lastName: 'López',
      age: 20,
      enable: true
    },
    {
      name: 'Ignacio',
      lastName: 'Rojas',
      age: 21,
      enable: false
    }
  ]

  ngOnInit(){
    
  }

  onClickSaveChild(event){
    console.log('EVENT CHILD:', event)
  }
}

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

  ngOnInit(){
    
  }

  onClickSaveChild(event){
    console.log('EVENT CHILD:', event)
  }
}

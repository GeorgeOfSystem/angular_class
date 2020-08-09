import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-class';

  ngOnInit(){
    const asynArray = from([1,2,3,4,5,6]);
    asynArray.subscribe(s => console.log('item', s));

    const mouseMovement = fromEvent(document, "mousemove");
    mouseMovement.subscribe(s => console.log('event',s.clientX + ', ' + s.clientY));
  }
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() name : string;
  @Input() size : string;
  @Input() stock : number;

  @Output() buyButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buy(){
    this.buyButton.emit('');
  }
}
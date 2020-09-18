import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'concert',
  template: `<mat-card class="example-card" [ngStyle]="{'background': stock > 0 ? 'orange' : 'red' }">
  <mat-card-header>
    <mat-card-title>Name: {{name | uppercase }}</mat-card-title>
    <mat-card-subtitle>Stock: {{stock}} </mat-card-subtitle>
  </mat-card-header>
    <img mat-card-image [src]="urlImage" alt="Photo of a Shiba Inu">
    <mat-card-content>
      <p>
        Enable: {{enable | yesNo}}
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button *ngIf="enable" mat-button (click)="onEdit()"> Edit</button>
      <button mat-button (click)="onDelete()">Delete</button>
    </mat-card-actions>
</mat-card>`
})
export class ConcertCardComponent implements OnInit {

  @Input() name: string;
  @Input() stock: string;
  @Input() enable: boolean;
  @Input() type: string;
  @Input() urlImage: string;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  

  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
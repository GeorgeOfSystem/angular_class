import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [
    Jurados1Component,
    RoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class JuradosModule { }

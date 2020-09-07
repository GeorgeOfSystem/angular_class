import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { JuradosRoutingModule } from './jurados-routing.module';



@NgModule({
  declarations: [
    Jurados1Component,
    JuradosRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class JuradosModule { }

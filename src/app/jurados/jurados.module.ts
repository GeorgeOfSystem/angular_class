import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { JuradosRouting } from './JuradosRouting';



@NgModule({
  declarations: [
    Jurados1Component,
    JuradosRouting
  ],
  imports: [
    CommonModule
  ]
})
export class JuradosModule { }

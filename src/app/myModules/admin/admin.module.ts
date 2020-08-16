import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admi1Component } from './admiComponents/admi1/admi1.component';
import { Admi2Component } from './admiComponents/admi2/admi2.component';
import { Admi3Component } from './admiComponents/admi3/admi3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Admi1Component,
    Admi2Component,
    Admi3Component
  ],
  exports: [
    Admi1Component,
    Admi2Component,
    Admi3Component
  ]
})
export class AdminModule { }
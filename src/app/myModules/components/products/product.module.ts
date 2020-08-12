import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prod1Component } from '../../../myModules/components/products/components/prod1/prod1.component';
import { Prod2Component } from '../../../myModules/components/products/components/prod2/prod2.component';
import { Prod3Component } from '../../../myModules/components/products/components/prod3/prod3.component';
import { PersonModule } from '../../../myModules/components/person.module';

@NgModule({
  imports: [
    CommonModule,
    PersonModule
  ],
  declarations: [
    Prod1Component,
    Prod2Component,
    Prod3Component
  ],
  exports: [
    Prod1Component,
    Prod2Component,
    Prod3Component
  ]
})
export class ProductModule { }
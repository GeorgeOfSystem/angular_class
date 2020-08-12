import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './myComponents/test/test.component';
import { FormsModule } from '@angular/forms';
import { DoCheckComponent } from './myComponents/do-check/do-check.component';
import { PersonModule } from './myModules/components/person.module';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { Prod3Component } from './prod3/prod3.component';
import { ProductModule } from './myModules/components/products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DoCheckComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

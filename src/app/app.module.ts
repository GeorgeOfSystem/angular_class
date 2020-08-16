import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './myComponents/test/test.component';
import { FormsModule } from '@angular/forms';
import { DoCheckComponent } from './myComponents/do-check/do-check.component';
import { PersonModule } from './myModules/components/person.module';
import { Prod1Component } from './myModules/components/products/components/prod1/prod1.component';
import { Prod2Component } from './myModules/components/products/components/prod2/prod2.component';
import { Prod3Component } from './myModules/components/products/components/prod3/prod3.component';
import { ProductModule } from './myModules/components/products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DoCheckComponent,
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

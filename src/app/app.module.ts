import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './myComponents/test/test.component';
import { FormsModule } from '@angular/forms';
import { DoCheckComponent } from './myComponents/do-check/do-check.component';
import { PersonModule } from './myModules/components/person.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DoCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

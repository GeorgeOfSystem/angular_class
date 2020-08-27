import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonModule } from './myModules/components/person.module';
import { ProductModule } from './myModules/components/products/product.module';
import { AdminModule } from './myModules/admin/admin.module';
import { UserModule } from './myModules/user/user.module';
import { MyFirstPipePipe } from './myPipes/my-first-pipe.pipe';
import { ExponentialPipe } from './myPipes/exponential.pipe';
import { PurePipe } from './myPipes/pure.pipe';
import { ImpurePipe } from './myPipes/impure.pipe';
import { NgColorDirective } from './myDirectives/ng-color.directive';
import { NgFocusDirective } from './myDirectives/ng-focus.directive';
import { HomeComponent } from './myComponents/home/home.component';
import { AboutComponent } from './myComponents/about/about.component';
import { AdminComponent } from './myComponents/admin/admin.component';
import { AppRouting } from './app.routing';
import { Home1Component } from './myComponents/home1/home1.component';
import { Home2Component } from './myComponents/home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

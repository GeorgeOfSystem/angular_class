import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './myComponents/test/test.component';
import { FormsModule } from '@angular/forms';
import { DoCheckComponent } from './myComponents/do-check/do-check.component';
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




@NgModule({
  declarations: [
    /*AppComponent,
    TestComponent,
    DoCheckComponent,
    MyFirstPipePipe,
    ExponentialPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective,*/
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DoCheckComponent,
    MyFirstPipePipe
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

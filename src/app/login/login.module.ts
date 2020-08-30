import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { myNgElseDirective } from '../myDirectives/ng-else.directive';



@NgModule({
  declarations: [
    LoginComponent,
    myNgElseDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

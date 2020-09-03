import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { myNgElseDirective } from '../myDirectives/ng-else.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    myNgElseDirective
  ],
  imports: [
    FormsModule,//formularios de template
    //ReactiveFormsModule,//formularios reactivos
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

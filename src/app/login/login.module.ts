import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { myNgElseDirective } from '../shared/myDirectives/ng-else.directive';
import { AuthService } from '../shared/myServices/auth.service';



@NgModule({
  declarations: [
    LoginComponent,
    myNgElseDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }

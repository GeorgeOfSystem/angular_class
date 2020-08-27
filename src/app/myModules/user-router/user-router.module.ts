import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouterRoutingModule } from './user-router-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRouterRoutingModule
  ]
})
export class UserRouterModule { }

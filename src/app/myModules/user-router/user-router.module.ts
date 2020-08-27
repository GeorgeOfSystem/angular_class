import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouterRoutingModule } from './user-router-routing.module';
import { UsersComponent } from './users/users.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';


@NgModule({
  declarations: [
    UsersComponent,
    User1Component,
    User2Component
  ],
  imports: [
    CommonModule,
    UserRouterRoutingModule
  ]
})
export class UserRouterModule { }

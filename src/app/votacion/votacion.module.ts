import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Votacion1Component } from './votacion1/votacion1.component';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [
    Votacion1Component,
    RoutingModule
    ],
  imports: [
    CommonModule
  ]
})
export class VotacionModule { }

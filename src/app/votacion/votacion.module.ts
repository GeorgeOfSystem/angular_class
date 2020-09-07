import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Votacion1Component } from './votacion1/votacion1.component';
import { VotacionRoutingModule } from './votacion-routing.module';



@NgModule({
  declarations: [
    Votacion1Component
    ],
  imports: [
    CommonModule,
    VotacionRoutingModule
  ]
})
export class VotacionModule { }

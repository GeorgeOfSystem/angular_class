import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'jurado', loadChildren: () => import('./jurados/jurados.module').then(m => m.JuradosModule)},
  {path: 'votacion', loadChildren: () => import('./votacion/votacion.module').then(m => m.VotacionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
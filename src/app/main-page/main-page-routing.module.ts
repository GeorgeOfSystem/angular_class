import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path:'', component:MainPageComponent,
  children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }

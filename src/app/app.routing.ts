import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)}
];*/

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'pages', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {

}

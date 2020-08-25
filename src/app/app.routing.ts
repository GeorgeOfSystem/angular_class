import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { AboutComponent } from './myComponents/about/about.component';
import { AdminComponent } from './myComponents/admin/admin.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'about' , component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {

}

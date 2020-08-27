import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { AboutComponent } from './myComponents/about/about.component';
import { AdminComponent } from './myComponents/admin/admin.component';
import { Home1Component } from './myComponents/home1/home1.component';
import { Home2Component } from './myComponents/home2/home2.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    children: [
      { path: 'home1', component: Home1Component },
      { path: 'home2', component: Home2Component }
    ]
  },
  {path: 'admin' , component: AdminComponent},
  {path: 'about' , component: AboutComponent},
  { path: 'user' , loadChildren: ()=> import('./myModules/user-router/user-router.module').then(m => m.UserRouterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {

}

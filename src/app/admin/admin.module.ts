import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../shared/services/product.service';
import { YesNoPipe } from '../shared/pipes/yes-no.pipe';
import { HeaderSuperTicketsComponent } from './components/header-super-tickets/header-super-tickets.component';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';


const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  declarations: [AdminComponent,YesNoPipe, HeaderSuperTicketsComponent, ConcertCardComponent]
})
export class AdminModule { }
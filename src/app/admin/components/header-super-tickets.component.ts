import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'header-superTickets',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#"> Super Tickets </a>
  <a class="navbar-brand" href="#"> {{stock}} {{national}} {{international}} </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <button (click)="onLogout()">LOGOUT</button>
  </div>
</nav>`
})
export class HeaderSuperTicketsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
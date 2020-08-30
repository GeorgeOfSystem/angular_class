import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      description: 'Salteñas de las potosinas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'salteñas'
    },
    {
      description: 'Salteñas de las SuperSalteñas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'salteñas'
    },
    {
      description: 'Salteñas de las Castores',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'salteñas'
    },
    {
      description: 'Salteñas de las Paceñas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'salteñas'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

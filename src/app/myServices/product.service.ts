import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ProductService {

  constructor() { }

  getProducts():any{
    return [
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
  }
}
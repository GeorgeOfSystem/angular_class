import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../myServices/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];


  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      console.log('respuesta',res);
      console.log('respuesta', Object.entries(res));
      Object.entries(res).map(p => this.products.push(p[1]) )
    });
  }

}

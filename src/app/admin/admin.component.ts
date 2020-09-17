import { Component, OnDestroy,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ProductService } from '../shared/services/product.service';
import {Store} from '@ngrx/store';
import { AddProduct } from './store/home.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  products = [];
  productsNational = [];
  productsInternational = [];
  homeSubs: Subscription;
  cart = [];

  productForm: FormGroup;
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  // nameControl = new FormControl();

  constructor(private store: Store<any>,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      this.cart = Object.assign([], res.items);
      
    });

    this.loadProduct();

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      stock: '',
      enable: '',
      type: ['Nacional - Internacional', [Validators.required]],
      urlImage:''
    });

  }


  loadProduct(): void {
    this.products = [];
    this.productsNational = [];
    this.productsInternational = [];
    //const userId = this.authService.getUserId();
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.productsInternational = this.products.filter(s=>s.type=='internacional');
      this.productsNational = this.products.filter(s=>s.type=='nacional');
    });
  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(
      this.idEdit,
      {
        ...this.productForm.value,
        ownerId: this.authService.getUserId()
      }
    ).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    this.productSubs = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
    this.loadProduct();
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

   public onLogout(): void {
    this.authService.logout();
  }

  onReport(product): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));

  }

}
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

  search='';
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
      console.log('res',res.items)
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
      //this.onSearch2('internacional',this.products);
      this.productsInternational = this.onSearch2('internacional',this.products);
      this.productsNational = this.onSearch2('nacional',this.products);
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

  onReport(product): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));

  }

  onSearch2( type : string, product : any[] ): any[] {
    const prod = product.filter(s=>s.type==type);
    if(this.search.length>0){
      const arr = [];
      for(let index in prod){
        var i = 0;
        const name = prod[index].name;
        console.log('slice',name.slice(i,i+this.search.length));
        /*while( i + this.search.length < name.length){
          console.log('slice',name.slice(i,i+this.search.length));
          i++;
        }*/


        for(let i in name){
          if(name[i] == this.search){
            arr.push(prod[index]);
            break;
          }
        }
      }
      return arr;
    }else{
      return prod;
    }
  }

  onSearch(){
    this.loadProduct();
  }

}
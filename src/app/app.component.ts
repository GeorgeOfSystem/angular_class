import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonService } from './myServices/person.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  products = [];

  productForm: FormGroup;

  personSubs: Subscription;
  personGetSubs: Subscription;
  personDeleteSubs: Subscription;
  personUpdateSubs: Subscription;
  idEdit: any;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService) {
  }

  ngOnInit(): void {

    this.loadProduct();

    this.productForm = this.formBuilder.group({
      name: ['name', [Validators.required, Validators.minLength(3)]],
      urlImage: '',
      age: '',
      enable: ''
    });

  }

  loadProduct(): void {

    this.products = [];
    this.personGetSubs = this.personService.getPerson().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.personDeleteSubs = this.personService.deletePerson(id).subscribe(
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
    this.personUpdateSubs = this.personService.updatePerson(this.idEdit, this.productForm.value).subscribe(
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
    this.personSubs = this.personService.addPerson(this.productForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  ngOnDestroy(): void {
    this.personSubs ? this.personSubs.unsubscribe() : '';
    this.personGetSubs ? this.personGetSubs.unsubscribe() : '';
    this.personDeleteSubs ? this.personDeleteSubs.unsubscribe() : '';
    this.personUpdateSubs ? this.personUpdateSubs.unsubscribe() : '';
  }
}

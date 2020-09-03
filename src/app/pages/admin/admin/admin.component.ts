import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm : FormGroup;

  //nameControl = new FormControl();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: '',
      imageUrl: '',
      ownerId: '',
      price: '',
      tittle: ''
    });
  }
  
  /*
  onSend(){
    console.log('value', this.nameControl.value);
  }
  */
  onSend2(){
    console.log('Form group', this.productForm.value);
  }
}

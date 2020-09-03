import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../myServices/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm : FormGroup;

  //nameControl = new FormControl();

  constructor(private formBuilder : FormBuilder, private productService : ProductService) { 

   }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: ['description',[ Validators.required, Validators.minLength(3) ]],
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
    this.productService.postProducts(this.productForm.value).subscribe(res => {
      console.log('res',res)
    });
  }
}

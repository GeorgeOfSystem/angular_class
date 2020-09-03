import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string ='';
  password : string ='';

  sw = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() : void {
    console.log('userName',this.userName);
    console.log('password',this.password);
  }

  onLogin2 (form) : void {
    console.log('Variables: ',form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  getformlogindata(value:any)
  {
    console.log(value)
  }
  
 
  constructor(private formbuilder:FormBuilder) { }

  loginform:any;

  ngOnInit() {

    this.loginform = this.formbuilder.group({
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["",[Validators.required]]
    })
  }

}

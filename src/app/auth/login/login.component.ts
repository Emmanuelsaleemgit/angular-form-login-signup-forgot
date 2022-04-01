import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{ 
  constructor(private formbuilder:FormBuilder, private authservice 
  : AuthService) { }

  loginform:any;

  ngOnInit() {

    this.loginform = this.formbuilder.group({
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["",[Validators.required]]
    })
  }

  submit(){
    console.log("hello")
    console.log(this.loginform)
    // debugger;
    this.authservice.login(this.loginform.value.email, this.loginform.value.password)

  }

}

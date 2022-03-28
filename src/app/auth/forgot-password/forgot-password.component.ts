import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit 
{
  getformforgotpassdata(value:any)
  {
    console.log(value)
  }

  constructor(private formbuilder:FormBuilder) { }
  forgotpass:any;
  ngOnInit(): void {
    this.forgotpass = this.formbuilder.group({
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]]
    })
  
  }

}

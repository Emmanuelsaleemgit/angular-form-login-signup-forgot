import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  getformregisterdata(value:any)
  {
    console.log(value)
  }

  constructor(private formbuilder:FormBuilder) { }

  Registerform:any;

  ngOnInit() {

    this.Registerform = this.formbuilder.group({
      name: ["",[Validators.required]],
      last_name: ["",[Validators.required]],
      phone_number: ["",[Validators.required]],
      address: ["",[Validators.required]],
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]],
      password: ["",[Validators.required]]
    })
  }
  register()
  {
    console.log(this.Registerform)
  }

}

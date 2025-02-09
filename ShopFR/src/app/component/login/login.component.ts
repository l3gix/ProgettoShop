import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from '../../model/loginuser';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent 
{
  loginGroup!: FormGroup;

    constructor() {
      this.loginGroup = new FormGroup({
        username : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)
      })
    }

    submit()
    {
      let user : LoginUser;
      user = new LoginUser(this.loginGroup.value.username,this.loginGroup.value.password);


    }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../model/registeruser';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerGroup : FormGroup ;
  
  constructor() {
    this.registerGroup = new FormGroup({
      nome : new FormControl('',Validators.required),
      cognome : new FormControl('',Validators.required),
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    });
  }

  submit()
  {
    let user : RegisterUser = new RegisterUser(this.registerGroup.value.username,this.registerGroup.value.password,this.registerGroup.value.nome,this.registerGroup.value.cognome);
  }
}

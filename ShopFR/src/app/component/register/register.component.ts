import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../model/registeruser';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerGroup : FormGroup ;
  
  constructor(private auth : AuthService, private route : Router) {
    this.registerGroup = new FormGroup({
      nome : new FormControl('',Validators.required),
      cognome : new FormControl('',Validators.required),
      username : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  submit()
  {
    //let user = new RegisterUser(this.registerGroup.value.username,this.registerGroup.value.password,this.registerGroup.value.nome,this.registerGroup.value.cognome);
    let user : RegisterUser = new RegisterUser(this.registerGroup.value.username,this.registerGroup.value.password,this.registerGroup.value.nome,this.registerGroup.value.cognome);

    this.auth.register(user).subscribe((resuls:any) => {
      console.log(resuls)
      localStorage.setItem("user",JSON.stringify(resuls));
      this.route.navigate(["/homepage"]);
      this.registerGroup.reset();
      
    },error => {
      console.log(error)
    }
  );
  
  }

  validateInputControl(form : FormGroup , controlName : string)
    {
      return form.get(controlName)?.invalid && form.get(controlName)?.touched;
    }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from '../../model/loginuser';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AdminoperationService } from '../../service/adminoperation.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent 
{
  loginGroup!: FormGroup;
  route: any;
  errorLogin : boolean = false;
    constructor(private auth : AuthService, private router : Router, private a : AdminoperationService) {
      this.loginGroup = new FormGroup({
        username : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)
      })
    }

    submit()
    {
      let user : LoginUser;
      user = new LoginUser(this.loginGroup.value.username,this.loginGroup.value.password);

      this.auth.login(user).subscribe((resuls:any) => 
        {

        console.log("risulato",resuls);
        const id = resuls.id_user;
        if(resuls.role != null)
        {
        this.a.loginAdmin(id).subscribe((res:any) => {
          //console.log(res);
          this.a.setIsAdmin(Boolean(res));
          this.router.navigate(['/adminhomepage']);
        },error => console.log(""));
      }

        localStorage.setItem('user',JSON.stringify(resuls));
        console.log("stampo nel login",localStorage.getItem('user'));
        
        this.router.navigate(['/homepage']);
        this.loginGroup.reset();

      },error => {
        console.log(error)
        this.errorLogin = true;
      }
    );

    }

    validateInputControl(form : FormGroup , controlName : string)
    {
      return form.get(controlName)?.invalid && form.get(controlName)?.touched;
    }
}

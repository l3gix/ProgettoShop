import { Component } from '@angular/core';
import { AdminoperationService } from '../../service/adminoperation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

    constructor(private auth : AuthService, private router : Router){

    }

    logout() {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }

}

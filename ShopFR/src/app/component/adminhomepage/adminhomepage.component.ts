import { Component } from '@angular/core';
import { AdminoperationService } from '../../service/adminoperation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  standalone: false,
  templateUrl: './adminhomepage.component.html',
  styleUrl: './adminhomepage.component.css'
})
export class AdminhomepageComponent {

  constructor(private auth : AdminoperationService,private router : Router) { }
  logout()
  {
    this.auth.setIsAdmin(false);
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }
}

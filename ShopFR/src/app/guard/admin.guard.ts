import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminoperationService } from '../service/adminoperation.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth : AdminoperationService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    if(this.auth.getIsAdmin()) return true;
    else 
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}

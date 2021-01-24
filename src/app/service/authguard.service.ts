import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthserviceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // if (this.authService.isUserLoggedIn())
    //   return true;
   
    //   this.router.navigate(['login']);
    // return false;

  }
}

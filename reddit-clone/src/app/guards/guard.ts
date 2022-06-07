import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  constructor(private auth:AuthService){} 

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.auth.getRoles() === "ROLE_USER" || "ROLE_MODERATOR" || "ROLE_ADMIN"){
        return true;
      }
      return false;
  }
  
}

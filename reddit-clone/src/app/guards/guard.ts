import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { roleEnum } from '../model/roleEnum';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  constructor(private auth:AuthService, private roleEnum: roleEnum){} 

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.auth.getRoles() === "ROLE_USER" || "ROLE_MODERATOR" || "ROLE_ADMIN"){
        return true;
      }
      return false;
  }
  
}

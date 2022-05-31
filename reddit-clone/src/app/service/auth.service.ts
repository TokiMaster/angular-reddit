import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  logout() {
    localStorage.removeItem('jwt token')
    this.router.navigateByUrl('/login');
  }

  getUsername(): string {
    let token = this.parseToken();
    if (token) {
      return this.parseToken()['sub']
    }
    return "";
  }

  getRoles() {
    let token = this.parseToken();
    if (token) {
      return this.parseToken()['roles'];
    }
    return []
  }

  private parseToken() {
    let jwt = localStorage.getItem('jwt token');
    if (jwt !== null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData;
    }
  }

  tokenIsPresent(): Boolean {
    let token = this.getToken()
    return token != null;
  }

  getToken() {
    let token = localStorage.getItem('jwt token');
    console.log(token)
    return token
  }
}

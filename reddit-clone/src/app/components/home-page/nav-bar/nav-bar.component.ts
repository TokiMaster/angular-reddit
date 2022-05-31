import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginClick(){
    this.router.navigateByUrl("/login");
  };

  registrationClick(){
    this.router.navigateByUrl("/registration");
  };

  loggedIn(): Boolean{
    return this.auth.tokenIsPresent();
  }

  logout(){
    return this.auth.logout();
  }

}

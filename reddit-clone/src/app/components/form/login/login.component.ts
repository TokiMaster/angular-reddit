import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLoginDTO } from 'src/app/model/userLoginDTO';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin!: userLoginDTO;
  login!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.login = this.fb.group({
      'username' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
    })
  }
  
  onSubmit(){
    
  }
  
}

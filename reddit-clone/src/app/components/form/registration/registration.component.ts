import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';
import { ConfirmPasswordValidator } from '../confirm-password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user!: User;
  register!: FormGroup;

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
    this.register = this.fb.group({
      'displayName' : new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'email' : new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'username' : new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9_]{3,21}$')]),
      'password' : new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'confirm' : new FormControl(null, [Validators.required])
    },
    {
      validator: ConfirmPasswordValidator("password", "confirm")
    });
  }

  onSubmit(){
    this.user = new User(this.register.value);
    this.userService.register(this.user).subscribe( () => {this.router.navigateByUrl("/login")}, 
    () => {});
  }  

}

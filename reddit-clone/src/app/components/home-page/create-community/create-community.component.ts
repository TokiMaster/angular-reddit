import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Community } from 'src/app/model/community';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  community!: Community;
  createCommunity!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,) { 
      this.createForm()
    }

  ngOnInit(): void {
  }


  createForm(){
    this.createCommunity = this.fb.group({
      'name' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'description' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit(){

  }
}

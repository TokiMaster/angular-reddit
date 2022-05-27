import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateCommunity } from 'src/app/model/createCommunity';
import { communityService } from 'src/app/service/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  community!: CreateCommunity;
  createCommunity!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private communityService: communityService) { 
      this.createForm()
    }

  ngOnInit(): void {
  }


  createForm(){
    this.createCommunity = this.fb.group({
      'name' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(){
    this.community = new CreateCommunity(this.createCommunity.value);
    this.communityService.createCommunity(this.community).subscribe(() => this.router.navigateByUrl("/"))
  }
}

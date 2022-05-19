import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post!: Post;
  createPost!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,) { 
      this.createForm()
    }

  ngOnInit(): void {
  }


  createForm(){
    this.createPost = this.fb.group({
      'title' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'text' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit(){

  }
}

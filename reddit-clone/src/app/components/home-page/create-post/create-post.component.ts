import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CreatePost } from 'src/app/model/CreatePost';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post!: CreatePost;
  createPost!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute) { 
      this.createForm()
    }

  ngOnInit(): void {
  }


  createForm(){
    this.createPost = this.fb.group({
      'title' : new FormControl(null, Validators.required),
      'text' : new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    this.route.paramMap.subscribe((params: ParamMap) => { let id = params.get('id') || ""; 
    let form = this.createPost.value;
    form.communityId = id;
    this.post = new CreatePost(form); 
  });
    
    this.postService.createPost(this.post).subscribe(() => this.router.navigateByUrl("/"));
  }
}

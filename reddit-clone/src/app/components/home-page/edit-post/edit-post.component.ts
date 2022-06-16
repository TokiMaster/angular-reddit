import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { UpdatePost } from 'src/app/model/UpdatePost';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post!: Post;
  editPost!:UpdatePost;
  editPostFG!: FormGroup;

  constructor(private route: ActivatedRoute, private postService: PostService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id') || "" 
      this.postService.getOnePost(parseInt(id)).subscribe(post => {this.post = post, this.editPostFG.get('text')?.patchValue(this.post.text)})
    });
  }


  createForm(){
    this.editPostFG = this.fb.group({
      'text' : new FormControl(null, Validators.required)
    })
  }


  onSubmit(){
    this.editPost = new UpdatePost(this.editPostFG.value);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id') || "" 
      this.postService.editPost(parseInt(id), this.editPost).subscribe(editPost => {this.editPost = editPost, this.router.navigateByUrl("/")});
    });
  }
}

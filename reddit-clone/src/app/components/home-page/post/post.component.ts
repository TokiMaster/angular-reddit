import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post | undefined;

  constructor(private postService: PostService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  get post1(){
    return this.post;
  }

  isMyPost():boolean{
    if(this.post1?.username === this.auth.getUsername()){
      return true;
    }else {
      return false;
    }
  }
  
  deletePost(id:number){
    confirm("Are you sure you want to delete this post?")
    this.postService.deletePost(id).subscribe();
  }
}

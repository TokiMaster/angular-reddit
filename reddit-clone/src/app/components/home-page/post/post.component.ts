import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { reactionDTO } from 'src/app/model/reactionDTO';
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

  @Output()
  valueChange = new EventEmitter<number>();

  @Output()
  upvoteChange = new EventEmitter<boolean>();

  @Output()
  downvoteChange = new EventEmitter<boolean>();

  constructor(private postService: PostService, private auth: AuthService, public router: Router) { }

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
    if(confirm("Are you sure you want to delete this post?") == true){
      this.valueChange.emit(id)
      this.postService.deletePost(id).subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err)
        });
    }
  }

  loggedIn(): Boolean{
    return this.auth.tokenIsPresent();
  }

  upvote(id:number, reaction:string){
    if(!this.loggedIn()){
      this.router.navigateByUrl("login")
    }else{
      this.postService.upvote(new reactionDTO(reaction, id)).subscribe({
        next: (data) => this.upvoteChange.emit(true),
        error: (err) => alert("Already upvoted")
        });
    }
  }

  downvote(id:number, reaction:string){
    if(!this.loggedIn()){
      this.router.navigateByUrl("login")
    }else{
    this.postService.upvote(new reactionDTO(reaction, id)).subscribe({
      next: (data) => this.downvoteChange.emit(true),
      error: (err) => alert("Already downvoted")
      });
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    if(confirm("Are you sure you want to delete this post?") == true){
      this.valueChange.emit(id)
      this.postService.deletePost(id).subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err)
        });
    }
  }

  upvote(id:number, reaction:string){
    this.postService.upvote(new reactionDTO(reaction, id)).subscribe();
  }

  downvote(id:number, reaction:string){
    this.postService.upvote(new reactionDTO(reaction, id)).subscribe();
  }
}

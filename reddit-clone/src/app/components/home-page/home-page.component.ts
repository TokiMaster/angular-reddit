import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  posts: Post[] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }
  
  getAllPosts(){
    this.postService.getAll().subscribe(posts => {this.posts = posts});
  }

  valueChange(event: any){
    let id = event as number
    this.posts = this.posts.filter((data) => data.id != id)
  }

}

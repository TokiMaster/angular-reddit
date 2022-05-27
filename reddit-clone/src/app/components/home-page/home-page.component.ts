import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { communityService } from 'src/app/service/community.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  posts: Post[] | undefined

  constructor(private postService: PostService,) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(posts => {this.posts = posts});
  }

}

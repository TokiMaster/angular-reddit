import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { communityService } from 'src/app/service/community.service';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit {

  communities: Community[] | undefined
  
  constructor(private communityService: communityService) { }

  ngOnInit(): void {
    this.communityService.getAll().subscribe(communities => {this.communities = communities});
  }

}

import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { communityService } from 'src/app/service/community.service';

@Component({
  selector: 'app-all-communities',
  templateUrl: './all-communities.component.html',
  styleUrls: ['./all-communities.component.css']
})
export class AllCommunitiesComponent implements OnInit {

  communities: Community[] | undefined

  constructor(private communityService: communityService) { }

  ngOnInit(): void {
    this.communityService.getAll().subscribe(communities => {this.communities = communities});
  }

}

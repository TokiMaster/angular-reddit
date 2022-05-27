import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createPostClick(){
    this.route.paramMap.subscribe((params: ParamMap) => { let id = params.get('id') || ""; this.router.navigateByUrl(`community/${id}/createPost`)});
    
  }

  createCommunityClick(){
    this.router.navigateByUrl("/createCommunity")
  }
}

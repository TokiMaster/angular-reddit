import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  createPostClick(){
    if(!this.loggedIn()){
      this.router.navigateByUrl("/login")
    }else{
      this.route.paramMap.subscribe((params: ParamMap) => { let id = params.get('id') || ""; this.router.navigateByUrl(`community/${id}/createPost`)});
    }
  }

  createCommunityClick(){
    if(!this.loggedIn()){
      this.router.navigateByUrl("/login")
    }else{
      this.router.navigateByUrl("/createCommunity")
    }
  }

  loggedIn(): Boolean{
    return this.auth.tokenIsPresent();
  }
}

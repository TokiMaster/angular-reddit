import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommunitiesComponent } from './components/community/all-communities/all-communities.component';
import { CommunityPageComponent } from './components/community/community-page/community-page.component';
import { FormComponent } from './components/form/form.component';
import { CreateCommunityComponent } from './components/home-page/create-community/create-community.component';
import { CreatePostComponent } from './components/home-page/create-post/create-post.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Guard } from './guards/guard';

const routes: Routes = 
[{path: '', component: HomePageComponent},
{path: 'login', component: FormComponent},
{path: 'registration', component: FormComponent},
{path: 'community/:id/createPost', component: CreatePostComponent, canActivate: [Guard]},
{path: 'createCommunity', component: CreateCommunityComponent, canActivate: [Guard]},
{path: 'community/:id', component: CommunityPageComponent},
{path: 'allCommunities', component: AllCommunitiesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

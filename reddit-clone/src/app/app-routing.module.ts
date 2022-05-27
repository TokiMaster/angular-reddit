import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityPageComponent } from './components/community/community-page/community-page.component';
import { FormComponent } from './components/form/form.component';
import { CreateCommunityComponent } from './components/home-page/create-community/create-community.component';
import { CreatePostComponent } from './components/home-page/create-post/create-post.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = 
[{path: '', component: HomePageComponent},
{path: 'login', component: FormComponent},
{path: 'registration', component: FormComponent},
{path: 'createPost', component: CreatePostComponent},
{path: 'createCommunity', component: CreateCommunityComponent},
{path: 'community/:id', component: CommunityPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

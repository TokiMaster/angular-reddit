import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './components/home-page/side-bar/side-bar.component';
import { SubredditSideBarComponent } from './components/home-page/subreddit-side-bar/subreddit-side-bar.component';
import { NavBarComponent } from './components/home-page/nav-bar/nav-bar.component';
import { PostComponent } from './components/home-page/post/post.component';
import { LoginComponent } from './components/form/login/login.component';
import { RegistrationComponent } from './components/form/registration/registration.component';
import { FormComponent } from './components/form/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './components/home-page/create-post/create-post.component';
import { CreateCommunityComponent } from './components/home-page/create-community/create-community.component';
import { CommunityPageComponent } from './components/community/community-page/community-page.component';
import { AllCommunitiesComponent } from './components/community/all-communities/all-communities.component';
import { httpInterceptorProviders } from './service';
import { Guard } from './guards/guard';
import { MyProfileComponent } from './components/home-page/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    NavBarComponent,
    PostComponent,
    LoginComponent,
    RegistrationComponent,
    FormComponent,
    CreatePostComponent,
    CreateCommunityComponent,
    CommunityPageComponent,
    AllCommunitiesComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }

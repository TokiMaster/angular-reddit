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
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

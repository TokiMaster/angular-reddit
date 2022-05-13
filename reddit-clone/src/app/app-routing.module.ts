import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = 
[{path: '', component: HomePageComponent},
{path: 'login', component: FormComponent},
{path: 'registration', component: FormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

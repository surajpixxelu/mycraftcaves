import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { BlogcomponentComponent } from './blogcomponent/blogcomponent.component';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomecomponentComponent
  },
  {
    path: 'about',
    component: AboutcomponentComponent
  },
  {
    path: 'blog',
    component: BlogcomponentComponent
  },
  {
    path: 'contact',
    component: ContactcomponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

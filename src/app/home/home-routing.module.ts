import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { page: 'home' },
  },

  // {
  //   path: 'about-me',
  //   component: AboutMeComponent,
  //   data: { page: 'about-me' },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

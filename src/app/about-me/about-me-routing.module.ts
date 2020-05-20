import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';


const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { page: 'about-me' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { environment } from '@env/environment';
import { AboutMeComponent } from './about-me/about-me.component';
import { UsersComponent } from './users/pages/users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: environment.log.routing,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

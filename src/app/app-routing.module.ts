import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { environment } from '@env/environment';


const routes: Routes = [

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/home',
  // },
  // {
  //   path: 'account',
  //   loadChildren: () =>
  //     import('./account/account.module').then((m) => m.AccountModule),
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('./profile/profile.module').then((m) => m.ProfileModule),
  // }
  // {
  //   path: '**',
  //   redirectTo: '/home',
  // }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: environment.log.routing,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

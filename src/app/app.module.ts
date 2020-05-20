import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HomeModule } from './home/home.module';
import { AboutMeModule } from './about-me/about-me.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HomeModule,

    ScrollToModule.forRoot(),



    // AboutMeModule,




    // // !Toast
    // ToastrModule.forRoot({
    //   preventDuplicates: true,
    // }),
    // // !JWT
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: [
    //       environment.primaryApiDomain,
    //       environment.secondaryApiDomain,
    //     ],
    //     blacklistedRoutes: [
    //       `${environment.secondaryApiDomain}/auth/`,
    //     ],
    //     authScheme: 'bearer ',
    //     skipWhenExpired: true
    //   }
    // }),

    // !NGRX
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: DefaultRouterStateSerializer
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Abz Agency Store App',
      logOnly: environment.production,
    })
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

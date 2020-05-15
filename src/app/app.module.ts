import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HomeModule


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
    // StoreModule.forRoot(ROOT_REDUCERS, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateSerializability: true,
    //     strictActionSerializability: true,
    //     strictActionWithinNgZone: true,
    //   },
    // }),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router',
    //   serializer: CustomSerializer
    // }),
    // StoreDevtoolsModule.instrument({
    //   name: 'NgRx Nutrient Planer Store App',
    //   logOnly: environment.production,
    // })
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

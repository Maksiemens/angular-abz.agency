import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = localStorage.getItem('access_token');
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) { }

  private checkToken(): boolean {
    const isLoggedIn = !this.jwtHelperService.isTokenExpired(this.token);
    this.isLoggedInSubject.next(isLoggedIn);
    return isLoggedIn;
  }

  private getLoginParams(user): HttpParams {
    let params = new HttpParams();
    if (!params.has(user.email)) {
      params = params.append('email', user.email);
    }
    if (!params.has(user.password)) {
      params = params.append('password', user.password);
    }
    return params;
  }

  login(user: User): Observable<boolean> {
    const params = this.getLoginParams(user);
    return this.http.post<Token>(`${environment.primaryApiUrl}/v1/token`, user, {
      params,
    })
    .pipe(map((response: Token) => {
      const token = response && response.token;
      if (token) {
        localStorage.setItem('access_token', token);
        this.token = token;
        this.isLoggedInSubject.next(true);
        return true;
      } else {
        return false;
      }
    }));
  }

  logout() {
    this.token = null;
    localStorage.removeItem('access_token');
    this.isLoggedInSubject.next(false);
  }

  loggedIn(): boolean {
    return this.checkToken();
  }

  loggedIn$(): Observable<boolean> {
    this.checkToken();
    return this.isLoggedIn$.pipe(distinctUntilChanged());
  }
}

/*
https://www.techiediaries.com/angular/jwt-authentication-angular-9-example/
https://auth0.com/blog/how-to-authenticate-firebase-and-angular-with-auth0-part-1/
https://auth0.com/docs/quickstart/spa/angular2?framed=1&sq=1#configure-auth0
https://auth0.com/blog/developing-real-time-apps-with-firebase-and-firestore/
https://github.com/auth0-blog/angular-firebase/blob/master/src/app/auth/auth.service.ts
https://auth0.com/blog/how-to-authenticate-firebase-and-angular-with-auth0-part-2/
https://firebase.google.com/docs/auth/admin/manage-sessions
https://medium.com/mtlserverless/authenticate-firebase-with-auth0-the-easy-way-fdaa5ef8b6c3
https://www.techiediaries.com/angular/jwt-authentication-angular-9-example/
https://auth0.com/blog/developing-real-time-apps-with-firebase-and-firestore/
https://auth0.com/blog/how-to-authenticate-firebase-and-angular-with-auth0-part-1/
https://auth0.com/blog/ngrx-authentication-tutorial/
https://angular-templates.io/tutorials/about/firebase-authentication-with-angular
https://auth0.com/blog/how-to-authenticate-firebase-and-angular-with-auth0-part-1/
https://auth0.com/docs/videos/get-started/04_02-authenticate-spa-example
https://firebase.google.com/docs/auth/admin/manage-sessions
https://www.sitepoint.com/authenticating-firebase-angular-auth0-1/
https://medium.com/ngrx/ngrx-5-and-schematics-2d8cc3906506
https://auth0.com/docs/videos/get-started/04_02-authenticate-spa-example
https://www.intertech.com/Blog/ngrx-tutorial-add-state-to-feature-module/
https://www.kimsereylam.com/angular/2019/11/01/feature-reducer-with-ngrx.html
https://drive.google.com/file/d/1cUo-vbZP0C2YtRF3L9667BlXoqaZdACl/view
https://apidocs.abz.dev/test_assignment_for_frontend_developer_api_documentation#users_post
https://medium.com/@auth0/how-to-authenticate-firebase-and-angular-with-auth0-part-1-custom-tokens-lazy-loading-b1b1003bc326
https://angular-templates.io/product/angular-site-template


*/


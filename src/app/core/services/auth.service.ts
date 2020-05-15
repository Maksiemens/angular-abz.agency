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

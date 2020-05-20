import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private getUsersPaginationParams(pagination): HttpParams {
    let params = new HttpParams();
    if (!params.has(pagination.page)) {
      params = params.append('page', pagination.page);
    }
    if (!params.has(pagination.count)) {
      params = params.append('count', pagination.count);
    }
    return params;
  }

  loadUsers(pagination): Observable<any> {
    const params = this.getUsersPaginationParams(pagination);
    return this.http.get<any>(`${environment.primaryApiUrl}/v1/users`, { params });
  }

  loadUserById(user: User): Observable<any> {
    return this.http.get<any>(`${environment.primaryApiUrl}/v1/users/${user.id}`);
  }

  addUser(user: User): Observable<any> {
    return this.http.post<any>(`${environment.primaryApiUrl}/v1/users`, {
      user
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  loadPositions(): Observable<any> {
    return this.http.get<any>(`${environment.primaryApiUrl}/v1/positions`);
  }
}

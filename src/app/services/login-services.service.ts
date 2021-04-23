import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  public requestLogin(teacherID: string, password: string) {
    return this.http.post<Login>(environment.apiUrl + "/api/v1/teclogin", {
      tecId: teacherID,
      passwd: password
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).pipe();
  }

}

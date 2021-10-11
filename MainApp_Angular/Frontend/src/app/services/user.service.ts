import { UserData } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private urlBase = "http://localhost:8080/users";

constructor(private http:HttpClient) { }

  getUserList():Observable<UserData> {
    return this.http.get<UserData>(`${this.urlBase}`+"/");
  }

}

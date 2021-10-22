import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../models/UserData';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

private urlBase = "http://localhost:8080/users";
private user:UserData;
options={headers:new HttpHeaders({ 'Content-Type': 'application/json' })}



constructor(private http:HttpClient) { }

  getUserList() {
    return this.http.get<Array<UserData>>(`${this.urlBase}`+"/");
  }

  getUsernameById(id : number) {
    return this.http.get<UserData>(`${this.urlBase}`+"/"+id);
  }

  postUser(user:UserData):Observable<Object>{
    return this.http.post<UserData>(`${this.urlBase}`+"/", {
      "username":user.username,
      "firstName":user.firstName,
      "lastName":user.lastName,
      "password":user.password,
      "email":user.email
    });
  }

  loginUser(email:string, password:string):Observable<UserData>{
    console.log("loginUser");
    return this.http.patch<UserData>(`${this.urlBase}`+"/login/?em="+`${email}`+"&wr="+`${password}`,
     {"em":email, "wr":password})
  }

  updateUser(user:UserData) {
    return this.http.put<UserData>(`${this.urlBase}`+"/update/"+user.id, {
      "id":user.id,
      "username":user.username,
      "firstName":user.firstName,
      "lastName":user.lastName,
      "password":user.password,
      "email":user.email
    },
    this.options)
  }

  deleteUser(user:UserData) {//cancella l'elemnto id dal databse
    return this.http.delete<boolean>(`${this.urlBase}`+"/delete/"+user.id, this.options)
  }

 }

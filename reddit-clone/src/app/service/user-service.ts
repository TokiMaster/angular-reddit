import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserLoginDTO } from '../model/userLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path:string = "http://localhost:8080/api/users";

  constructor(private http:HttpClient) { }

  login(user:UserLoginDTO):Observable<any>{
    return this.http.post(this.path+"/login", user, {responseType:'text'});
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.path+"/register", user);
  }
}

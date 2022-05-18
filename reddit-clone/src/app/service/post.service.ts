import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly path:string = "http://localhost:8080/api/posts";

  constructor(private http:HttpClient) { }

  getAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.path+"/all");
  }
}

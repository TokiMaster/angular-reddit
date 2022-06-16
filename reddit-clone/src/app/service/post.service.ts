import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { CreatePost } from '../model/CreatePost';
import { reactionDTO } from '../model/reactionDTO';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly path:string = "http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  getAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.path + 'posts');
  }

  getAllPostsByCommunityId(id:number):Observable<Post[]>{
    return this.http.get<Post[]>(this.path + `communities/${id}/posts`)
  }

  createPost(post:CreatePost):Observable<CreatePost>{
    return this.http.post<CreatePost>(this.path + 'posts', post);
  }

  deletePost(id:number): Observable<any>{
    return this.http.delete(this.path+ `posts/${id}`, {responseType:'text'});
  }

  upvote(post:reactionDTO):Observable<reactionDTO>{
    return this.http.post<reactionDTO>(this.path + `posts/${post.postID}/vote`, post);
  }

  downvote(post:reactionDTO):Observable<reactionDTO>{
    return this.http.post<reactionDTO>(this.path + `posts/${post.postID}/vote`, post);
  }
}

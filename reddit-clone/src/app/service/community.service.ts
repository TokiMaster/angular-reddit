import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from '../model/community';
import { CreateCommunity } from '../model/createCommunity';

@Injectable({
  providedIn: 'root'
})
export class communityService {

  private readonly path:string = "http://localhost:8080/api/communities";

  constructor(private http: HttpClient) { }

  getAll():Observable<Community[]>{
    return this.http.get<Community[]>(this.path);
  }

  createCommunity(community: CreateCommunity):Observable<Community>{
    return this.http.post<Community>(this.path, community);
  }
}

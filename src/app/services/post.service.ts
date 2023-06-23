import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable()
export class PostService {
  users: Post[] = [];

  url = 'https://api.fake-rest.refine.dev/posts?';

  constructor(private http: HttpClient) {}

  fetchListPost(pageIndex = 1, pageSize = 5): Observable<Post[]> {
    const list = this.http.get<Post[]>(
      `${this.url}_page=${pageIndex}&_limit=${pageSize}`
    );
    return list;
  }

  getPostCount(): Observable<number> {
    const url = `${this.url}`;
    return this.http.get<Post[]>(url).pipe(
      map((posts: Post[]) => {
        return posts.length;
      })
    );
  }
}

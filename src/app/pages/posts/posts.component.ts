import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  loading = false;
  data: Post[] = [];
  pageIndex = 1;
  pageSize = 5;
  totalItems = 100;

  constructor(private postService: PostService) {}

  loadData(): void {
    this.loading = true;
    this.postService
      .fetchListPost(this.pageIndex, this.pageSize)
      .subscribe((posts: Post[]) => {
        this.data = posts;
        this.postService.getPostCount().subscribe((count: number) => {
          this.totalItems = count;
          this.loading = false;
        });
      });
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadData();
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }
}

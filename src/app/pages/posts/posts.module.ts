import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageService } from 'ng-zorro-antd/message';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostService } from 'src/app/services/post.service';
import { IsEvenPipe } from 'src/app/pipes/isEvenPipe';

@NgModule({
  declarations: [PostsComponent, IsEvenPipe],
  imports: [
    CommonModule,
    NzListModule,
    NzSpaceModule,
    NzPaginationModule,
    PostsRoutingModule,
  ],
  providers: [NzMessageService, PostService, IsEvenPipe],
})
export class PostsModule {}

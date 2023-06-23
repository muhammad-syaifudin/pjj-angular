import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PostsComponent } from './posts.component';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { IsEvenPipe } from 'src/app/pipes/isEvenPipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PostsComponent', () => {
  const mockPosts: Post[] = [
    {
      id: 1,
      title: 'Konkaboti',
      slug: 'nam-modi-sequi',
      content:
        'Quia distinctio ratione sed in porro consequatur. Occaecati a minima veniam iusto aperiam repellendus. Soluta et quae. Quod sequi accusantium necessitatibus quia quo dolor vero. Culpa assumenda aspernatur qui rem tempora dolorem quo. Voluptatem illum dolores odit. Tenetur sed libero labore numquam voluptatem velit. Commodi cumque quam aut quam nesciunt odit impedit placeat saepe.',
      hit: 58978,
      category: {
        id: '4',
      },
      user: {
        id: 47,
      },
      status: 'published',
      status_color: 'lime',
      createdAt: '2022-05-06T05:59:04.778Z',
      publishedAt: '2022-03-05T10:23:00.436Z',
      image: [
        {
          url: 'http://loremflickr.com/640/480/abstract',
          name: '0a7ff880-c558-419f-bc5d-74944966140f',
          status: 'done',
          type: 'image/jpeg',
          uid: 'f3b622b9-3e93-4663-9b35-a00a3d517924',
        },
      ],
      tags: [7, 8],
      language: 2,
    },
    {
      id: 2,
      title: 'A soluta sunt unde alias provident',
      slug: 'voluptatem-sit-ipsam',
      content:
        'Voluptate excepturi dolor quo vero architecto doloribus harum. Rerum eius voluptatem non rem quia iure sunt reprehenderit corporis. Eum consequuntur dolores rerum quis quia. Ullam excepturi mollitia ipsam nihil. Placeat nisi aliquid qui occaecati veritatis aut provident. Fuga cupiditate nihil porro debitis eius quod illum debitis sint. Illum id et ipsum et velit nihil provident sed. Sunt iure sit ut ducimus maiores. Delectus eveniet excepturi assumenda sapiente ipsum ea. Consequuntur et voluptas possimus voluptatem.',
      hit: 931210,
      category: {
        id: '5',
      },
      user: {
        id: 21,
      },
      status: 'published',
      status_color: 'lime',
      createdAt: '2021-11-13T00:15:22.296Z',
      publishedAt: '2023-03-31T22:22:49.792Z',
      image: [
        {
          url: 'http://loremflickr.com/640/480/abstract',
          name: '7ec9dcef-c2b6-4e89-8613-547f37174034',
          status: 'done',
          type: 'image/jpeg',
          uid: 'f5a0c06e-c99a-42b5-adc7-3b1ffd9f6e79',
        },
      ],
      tags: [10, 8],
      language: 3,
    },
    {
      id: 4,
      title: 'Est neque voluptas nam ad.',
      slug: 'rerum-quidem-qui',
      content:
        'Et neque nemo veritatis. Quia omnis quidem natus hic dolores. Corrupti velit atque ipsam. Perferendis ut at dolorum quibusdam. Quasi totam veniam. Excepturi est aspernatur vitae sunt est sunt. Voluptatem eos recusandae amet alias animi rerum. Soluta esse reprehenderit soluta ut saepe quod. Nobis vel nihil quos officia voluptates quas. Et aperiam quo est et eum autem.',
      hit: 638856,
      category: {
        id: '49',
      },
      user: {
        id: 40,
      },
      status: 'published',
      status_color: 'lime',
      createdAt: '2022-02-11T02:11:40.325Z',
      publishedAt: '2021-10-02T05:18:11.523Z',
      image: [
        {
          url: 'http://loremflickr.com/640/480/abstract',
          name: '3fa1a945-ec7a-45b5-9708-76b7869589c1',
          status: 'done',
          type: 'image/jpeg',
          uid: 'dbcc5ec1-af8a-4f78-8827-eb593dbe0ca7',
        },
      ],
      tags: [8, 9],
      language: 2,
    },
  ];
  const mockPostCount = 3;

  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NzSpaceModule,
        NzListModule,
        NzPaginationModule,
      ],
      declarations: [PostsComponent, IsEvenPipe],
      providers: [PostService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on initialization', () => {
    spyOn(postService, 'fetchListPost').and.returnValue(of(mockPosts));
    spyOn(postService, 'getPostCount').and.returnValue(of(mockPostCount));

    fixture.detectChanges();

    expect(component.loading).toBe(false);
    expect(component.data).toEqual(mockPosts);
    expect(component.totalItems).toBe(mockPostCount);
  });

  it('should update page index and load data when page index changes', () => {
    const pageIndex = 2;
    spyOn(component, 'loadData');

    component.onPageIndexChange(pageIndex);

    expect(component.pageIndex).toBe(pageIndex);
    expect(component.loadData).toHaveBeenCalled();
  });

  it('should update page size and load data when page size changes', () => {
    const pageSize = 10;
    spyOn(component, 'loadData');

    component.onPageSizeChange(pageSize);

    expect(component.pageSize).toBe(pageSize);
    expect(component.loadData).toHaveBeenCalled();
  });
});

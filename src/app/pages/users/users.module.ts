import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from 'src/app/services/user.service';
import { DetilUserComponent } from './detil-user/detil-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UsiaPipe } from 'src/app/pipes/usia.pipe';

@NgModule({
  declarations: [
    UsiaPipe,
    UsersComponent,
    ListUserComponent,
    DetilUserComponent,
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzListModule,
    NzSpaceModule,
    NzUploadModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzPageHeaderModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzMessageModule,

    UsersRoutingModule,
  ],
  providers: [NzMessageService, UserService, UsiaPipe],
})
export class UsersModule {}

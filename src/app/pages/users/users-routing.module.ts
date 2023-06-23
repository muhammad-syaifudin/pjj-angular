import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DetilUserComponent } from './detil-user/detil-user.component';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: ListUserComponent },
      { path: ':id', component: DetilUserComponent },
      {
        path: ':id/edit',
        component: FormUserComponent,
      },
      {
        path: 'add',
        component: FormUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

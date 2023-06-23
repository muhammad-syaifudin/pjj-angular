import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

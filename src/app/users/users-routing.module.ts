import { AlbumsComponent } from './albums/albums.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../users/user/user.component';

import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user-posts', component: UserPostsComponent },
  { path: 'albums/:id', component: AlbumsComponent },
  { path: 'albums/photos/:albumId', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

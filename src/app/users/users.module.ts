import { PagerModule } from '@progress/kendo-angular-pager';
import { AlbumsService } from './../albums.service';
import { PhotosService } from './../photos.service';
import { BrowserModule } from '@angular/platform-browser';
import { UserPostsService } from './../user-posts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  GridModule,
  GridDataResult,
  PageChangeEvent,
} from '@progress/kendo-angular-grid';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from '../users.service';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { UserComponent } from './user/user.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LoginService } from '../login.service';
import { AlbumsComponent } from './albums/albums.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostsComponent,
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    GridModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    LabelModule,
    DialogModule,
    IconsModule,
    ButtonsModule,
    LayoutModule,
    DropDownsModule,
    PagerModule,
  ],
  providers: [
    UsersService,
    UserPostsService,
    LoginService,
    PhotosService,
    AlbumsService,
  ],
})
export class UsersModule {}

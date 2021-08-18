import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    GridModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
  ],
  providers: [UsersService],
})
export class UsersModule {}

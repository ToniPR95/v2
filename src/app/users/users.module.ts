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

@NgModule({
  declarations: [UsersComponent, UserComponent],
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
    HttpClientModule,
    IconsModule,
    ButtonsModule,
  ],
  providers: [UsersService],
})
export class UsersModule {}

import { GridModule } from '@progress/kendo-angular-grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { products } from './products';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, GridModule],
})
export class UsersModule {}

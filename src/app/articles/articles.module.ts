import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesService } from '../articles.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, ArticlesRoutingModule, HttpClientModule],
  providers: [ArticlesService],
})
export class ArticlesModule {}

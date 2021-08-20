import { ArticlesService } from './../articles.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  title = 'Article by Jeetendra';
  posts: any;

  constructor(private articles: ArticlesService) {}

  ngOnInit() {
    this.articles.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPostsService } from 'src/app/user-posts.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userPosts: UserPostsService
  ) {}

  ngOnInit(): void {}
}

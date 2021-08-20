import { Component, OnInit } from '@angular/core';
import { UserPostsService } from 'src/app/user-posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userposts: any;

  constructor(private userPosts: UserPostsService) {}

  ngOnInit() {
    this.userPosts.getUserPosts().subscribe(
      (response) => {
        console.log(response);
        this.userposts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPostsService } from 'src/app/user-posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userposts: any;
  public id!: string;
  userpostsIDs: any;
  userpostsByID: any;
  length: any;

  constructor(
    private route: ActivatedRoute,
    private userPosts: UserPostsService
  ) {}

  ngOnInit() {
    this.userpostsByID = [];
    this.id = this.route.snapshot.params['id'];
    this.userPosts.getUserPosts().subscribe(
      (response) => {
        this.userposts = response;
        for (var index in this.userposts) {
          if (this.userposts[index].userId == this.id) {
            this.length = this.userpostsByID.push(this.userposts[index]);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

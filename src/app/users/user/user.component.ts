import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    suite: new FormControl(),
    city: new FormControl(),
    zipcode: new FormControl(),
    latitude: new FormControl(),
    longitude: new FormControl(),
    phone: new FormControl(),
    website: new FormControl(),
  });

  public user: any;

  constructor(
    private route: ActivatedRoute,
    private userDetails: UsersService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userDetails.getUserById(id).subscribe(
      (response) => {
        console.log(response);
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

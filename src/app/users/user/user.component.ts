import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from './User';

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
    const id = this.route.snapshot.params['id'];
    this.userDetails.getUserById(id).subscribe(
      (response) => {
        this.user = response;
        this.setUserForm(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setUserForm(user: User) {
    this.userForm.controls.name.setValue(user.name);
    this.userForm.controls.username.setValue(user.username);
    this.userForm.controls.email.setValue(user.email);
    this.userForm.controls.street.setValue(user.address.street);
    this.userForm.controls.suite.setValue(user.address.suite);
    this.userForm.controls.city.setValue(user.address.city);
    this.userForm.controls.zipcode.setValue(user.address.zipcode);
    this.userForm.controls.latitude.setValue(user.address.geo.lat);
    this.userForm.controls.longitude.setValue(user.address.geo.lng);
    this.userForm.controls.phone.setValue(user.phone);
    this.userForm.controls.website.setValue(user.website);
  }
}

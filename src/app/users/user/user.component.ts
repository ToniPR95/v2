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
  public userEmail: any;

  constructor(
    private route: ActivatedRoute,
    private userDetails: UsersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userDetails.getUserById(id).subscribe(
      (response) => {
        this.user = response;
        console.log(this.user);
        this.userEmail = this.user.email;
        console.log(this.user.email);
        console.log(this.userEmail);
        this.userForm.controls.name.setValue(this.user.name);
        this.userForm.controls.username.setValue(this.user.username);
        this.userForm.controls.email.setValue(this.user.email);
        this.userForm.controls.street.setValue(this.user.address.street);
        this.userForm.controls.suite.setValue(this.user.address.suite);
        this.userForm.controls.city.setValue(this.user.address.city);
        this.userForm.controls.zipcode.setValue(this.user.address.zipcode);
        this.userForm.controls.latitude.setValue(this.user.address.geo.lat);
        this.userForm.controls.longitude.setValue(this.user.address.geo.lng);
        this.userForm.controls.phone.setValue(this.user.phone);
        this.userForm.controls.website.setValue(this.user.website);

        // this.userForm.controls.email.setValue(this.user.email);
      },
      (error) => {
        console.log(error);
      }
    );
    // this.userForm.controls.name.setValue(this.user.name);
    console.log(this.userForm.controls.email);
    console.log(this.userEmail);
  }
}

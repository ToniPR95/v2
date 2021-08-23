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

  user!: { id: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
    };
  }
}

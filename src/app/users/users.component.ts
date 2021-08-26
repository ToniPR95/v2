import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public gridData: Observable<any> = new Observable();
  usersSubscribe: any;

  constructor(private users: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.gridData = this.users.fetchUsers();
    this.usersSubscribe = this.gridData.subscribe(
      (response) => {
        this.usersSubscribe = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isRowInfo(dataItem: object) {
    const userID = dataItem;
  }

  selectedKeysChange($event: any) {}

  editHandler(dataItem: any) {}
}

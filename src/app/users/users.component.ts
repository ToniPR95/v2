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

  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.gridData = this.users.fetchUsers();
    console.log(this.gridData);
    this.usersSubscribe = this.gridData.subscribe(
      (response) => {
        console.log(response);
        this.usersSubscribe = response;
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(this.usersSubscribe);
  }

  isRowInfo(dataItem: object) {
    console.log(dataItem);
    const userID = dataItem;
    console.log(userID);
  }

  selectedKeysChange($event: any) {}

  editHandler(dataItem: any) {
    console.log(dataItem);
  }
}

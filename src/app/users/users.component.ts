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

  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.gridData = this.users.fetchUsers();
    console.log(this.gridData);
  }

  isRowInfo(event: Event) {
    console.log(event);
  }

  selectedKeysChange(rows: number[]) {
    console.log(rows);
  }

  editHandler(event: any) {
    console.log(event);
  }
}

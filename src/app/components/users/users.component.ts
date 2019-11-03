import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { User } from 'src/app/modles/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}

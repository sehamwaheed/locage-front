import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  user?: UserModel;
  constructor(private userService: UserService) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}
}

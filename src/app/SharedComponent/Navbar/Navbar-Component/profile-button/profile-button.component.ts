import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent implements OnInit {
  currentUser?: UserModel;
  constructor(private userService: UserService) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {}
  logout() {
    this.userService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent implements OnInit {
  currentUser?: UserModel;
  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {}
  logout() {
    this.userService.logout();
    this.cartService.calcTotals();
  }
}

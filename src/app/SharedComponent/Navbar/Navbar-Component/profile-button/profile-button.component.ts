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
  navToDashboard() {
    window.open('https://locage-dashboard.vercel.app/', '_blank');
  }
  logout() {
    this.userService.logout();
    this.cartService.calcTotals();
  }
}

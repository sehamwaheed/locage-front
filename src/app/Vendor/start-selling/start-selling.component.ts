import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  templateUrl: './start-selling.component.html',
  styleUrls: ['./start-selling.component.scss'],
})
export class StartSellingComponent implements OnInit {
  isLogin: boolean = false;
  currentUser?: UserModel;
  constructor(private userService: UserService, private router: Router) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.userService.loggedIn().subscribe((result: boolean) => {
      this.isLogin = result;
    });
  }

  onSubmit() {
      if (this.isLogin) {
        if (this.currentUser.role == 'vendor') {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/create-store']);
        }
      } else {
        this.router.navigate(['/login']);
      }
  }
}

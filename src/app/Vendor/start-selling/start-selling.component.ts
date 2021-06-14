import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  templateUrl: './start-selling.component.html',
  styleUrls: ['./start-selling.component.scss'],
})
export class StartSellingComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.loggedIn().subscribe((result: boolean) => {
      this.isLogin = result;
    });
  }
  onSubmit() {
    if (this.isLogin) {
      if (this.userService.currentUser.role == 'vendor') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/create-store']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}

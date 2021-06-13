import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  isLogin!: boolean;
  constructor(
    private userService: UserService,
    private localSt: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.loggedIn().subscribe((result: boolean) => {
      this.isLogin = result;
    });
    this.localSt.observe('access_token').subscribe((value) => {
      console.log(value);
      if (!value) {
        this.userService.getToken();
        this.router.navigate(['/login']);
      }
    });
  }
}

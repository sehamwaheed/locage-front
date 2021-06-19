import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  isLogin!: boolean;
  constructor(protected router: Router, protected userService: UserService) {
    this.userService.loggedIn().subscribe((result: boolean) => {
      this.isLogin = result;
    });
  }

  canActivate() {
    if (this.isLogin) return true;

    this.router.navigate(['/login']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/';
  currentUser!: any;
  private isLogin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isLogin = new BehaviorSubject<boolean>(false);
    this.getToken();
  }

  public loggedIn(): Observable<boolean> {
    this.getToken();
    return this.isLogin.asObservable();
  }

  logout() {
    localStorage.removeItem('access_token');
    this.currentUser = null;
    this.isLogin.next(false);
    this.router.navigate(['/home']);
  }

  public getToken() {
    let token = localStorage.getItem('access_token');
    if (!token) {
      this.currentUser = null;
      this.isLogin.next(false);
    } else {
      let jwt = new JwtHelperService();
      const isExpired = jwt.isTokenExpired(token);
      if (isExpired) this.logout();
      else {
        this.currentUser = jwt.decodeToken(token);
        this.isLogin.next(true);
      }
    }
    return token;
  }

  login(user: any) {
    return this.http.post(`${this.uri}users/login`, user);
  }
  register(user: any) {
    return this.http.post(`${this.uri}users/register`, user);
  }
  resetPassword(user: any) {
    return this.http.post(`${this.uri}users/reset-password`, user);
  }
  recoverPassword(user: any, resetToken: string) {
    return this.http.patch(`${this.uri}users/recover/${resetToken}`, user);
  }
  checkEmail(email: any) {
    return this.http.post(`${this.uri}users/isEmailRegister`, email);
  }
}

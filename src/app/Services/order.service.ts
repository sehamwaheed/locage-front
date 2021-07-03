import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/orders/';
  tokenUser?: any;

  constructor(private http: HttpClient, private userService: UserService) {
    this.tokenUser = this.userService.tokenUser;
  }

  getToken() {
    return this.http.get(`${this.uri}client-token`);
  }
  getUserOrders() {
    return this.http.get(`${this.uri}user`);
  }
  checkOut(data: any) {
    return this.http.post(`${this.uri}checkout`, data);
  }
}

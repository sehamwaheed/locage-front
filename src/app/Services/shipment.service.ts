import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  tokenUser?: any;
  private uri: String = 'https://locage.herokuapp.com/api/v1/shipment/';

  constructor(private http: HttpClient, private userService: UserService) {
    this.tokenUser = this.userService.tokenUser;
  }

  createAddress(body: any) {
    return this.http.post(`${this.uri}${this.tokenUser.id}`, body);
  }
  updateAddress(body: any, id: any) {
    return this.http.patch(`${this.uri}${this.tokenUser.id}/${id}`, body);
  }
  getShipments() {
    return this.http.get(`${this.uri}${this.tokenUser.id}`);
  }
  getPrimary() {
    return this.http.get(`${this.uri}${this.tokenUser.id}/primary`);
  }
  deleteShipment(id: any) {
    return this.http.delete(`${this.uri}${this.tokenUser.id}/${id}`);
  }
}

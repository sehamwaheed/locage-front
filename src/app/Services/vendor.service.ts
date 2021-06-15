import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/stores/';

  constructor(private http: HttpClient, private userService: UserService) {}

  createStore(body: FormData) {
    return this.http.post(`${this.uri}`, body);
  }

  getStoreByUserId() {
    return this.http.get(`${this.uri}check/${this.userService.tokenUser.id}`);
  }
}

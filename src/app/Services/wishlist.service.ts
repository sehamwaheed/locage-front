import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  tokenUser?: any;
  private uri: String = 'https://locage.herokuapp.com/api/v1/wishlist/';
  constructor(private http: HttpClient, private userService: UserService) { 
    this.tokenUser = this.userService.tokenUser;    
  }

  getUserWishList(){
    return this.http.get(`${this.uri}${this.tokenUser.id}`);
  }

  getUserWishListWithProducts(){
    return this.http.get(`${this.uri}${this.tokenUser.id}/product`);
  }

  addToWishList(id:any)
  {
    return this.http.get(`${this.uri}${this.tokenUser.id}/product/${id}`);
  }
  removeToWishList(id:any)
  {
    return this.http.delete(`${this.uri}${this.tokenUser.id}/product/${id}`);
  }
}

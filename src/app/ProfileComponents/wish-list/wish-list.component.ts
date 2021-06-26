import { WishListModel } from './../../Models/WishlistModel';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishlistItems: WishListModel[];
  isLoding: boolean = true;
  isempty: boolean = true;
  constructor(private wishlistService: WishlistService) {
    this.wishlistService.getUserWishListWithProducts().subscribe(
      (result: any) => {
        this.wishlistItems = result.result;
        this.isLoding = false;
        if(this.wishlistItems.length!=0 ){
          this.isempty = false;
        }
        else{
          this.isempty = true;
        }
      },
      (error) => {}
    );
  }

  ngOnInit(): void {}
}

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
  constructor(private wishlistService: WishlistService) {
    this.wishlistService.getUserWishListWithProducts().subscribe(
      (result: any) => {
        this.wishlistItems = result.result;
      },
      (error) => {}
    );
  }

  ngOnInit(): void {}
}

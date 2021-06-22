import { ProductModel } from './../../Models/ProductModel';
import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
})
export class WishlistItemComponent implements OnInit {
  @Input() item: ProductModel;
  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {}

  removeItem(id: any) {
    this.wishlistService.removeToWishList(id).subscribe(() => {
      this.item = null;
    });
  }
}

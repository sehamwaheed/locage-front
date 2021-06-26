import { ProductModel } from './../../Models/ProductModel';
import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist.service';
import {CartService} from 'src/app/Services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
})
export class WishlistItemComponent implements OnInit {
  @Input() item: ProductModel;

  constructor(private wishlistService: WishlistService , public cartService : CartService) {}

  ngOnInit(): void {}

  removeItem(id: any) {
    this.wishlistService.removeToWishList(id).subscribe(() => {
      this.item = null;
    });
  }

  addToCart(){
    this.cartService.addProduct(this.item , this.item.quantity);
    Swal.fire('Added', '', 'success');
  }
}

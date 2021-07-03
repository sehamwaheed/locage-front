import { ProductModel } from './../../Models/ProductModel';
import { Component, Input, OnInit, Output } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { CartService } from 'src/app/Services/cart.service';
import Swal from 'sweetalert2';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
})
export class WishlistItemComponent implements OnInit {
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Input() item: ProductModel;

  constructor(
    private wishlistService: WishlistService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.item.quantity = 1;
  }

  removeItem(id: any) {
    this.wishlistService.removeToWishList(id).subscribe(() => {
      this.item = null;
    });
  }

  addToCart() {
    this.cartService.addProduct(this.item, this.item.quantity);
    this.removeItem(this.item._id);
    Swal.fire('Added', '', 'success');
  }
}

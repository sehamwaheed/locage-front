import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Input('product') product: ProductModel = null;
  logged = false;
  constructor(
    private cartServ: CartService,
    private userServ: UserService,
    private wishList: WishlistService
  ) {}

  ngOnInit(): void {
    this.userServ.loggedIn().subscribe((res) => {
      this.logged = res;
    });
  }

  increase() {
    this.product.quantity++;
    this.cartServ.updateProduct(this.product);
  }

  addToFav() {
    this.wishList.addToWishList(this.product._id).subscribe(
      (res) => {
        Swal.fire('Item Is Added To Wish List', '', 'success');

        this.delete.emit(this.product._id);
      },
      (err) => {
        Swal.fire(err.error.message, '', 'error');
      }
    );
  }

  decreac() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
    this.cartServ.updateProduct(this.product);
  }

  deleteItem() {
    this.delete.emit(this.product._id);
  }
}

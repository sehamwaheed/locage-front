import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductModel } from '../Models/ProductModel';
import { Review } from '../Models/Review';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
import { WishlistService } from '../Services/wishlist.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  rate = 4;
  quantityOrder = 20;
  @Input('count') count: number = 1;
  colorText: string = 'red';
  id: any;
  isLogin: boolean = false;
  isLike: boolean = false;
  isLoding: boolean = true;
  product: ProductModel = null;
  wishListItems: any[];
  reviews: Review[] = [];
  totalRate: number = 0;
  rate1: number = 0;
  rate2: number = 0;
  rate3: number = 0;
  rate4: number = 0;
  rate5: number = 0;
  max = 0;
  readMore = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService,
    private userService: UserService,
    private wishlistService: WishlistService,
    public cartService: CartService,
    private router: Router
  ) {
    this.userService.loggedIn().subscribe((res) => {
      this.isLogin = res;
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productServices.getProductById(this.id).subscribe((pro: any) => {
      this.product = pro;
      console.log('afterinit', this.product);

      this.isLoding = false;
    });
    if (this.isLogin) {
      this.wishlistService.getUserWishList().subscribe((res: any) => {
        this.wishListItems = res.result;
        let isInWishList = this.wishListItems.find(
          (p) => p.productId == this.product._id
        );
        if (isInWishList) {
          this.isLike = true;
        }
      });
    }
    this.productServices.getAllReview(this.id);
    this.productServices.getReviewsWithoutLoad().subscribe((r: any) => {
      this.reviews = r?.result?.docs;

      this.rate1 = r.Rate1;
      this.rate2 = r.Rate2;
      this.rate3 = r.Rate3;
      this.rate4 = r.Rate4;
      this.rate5 = r.Rate5;

      this.totalRate = r.totalRating;
      this.max = this.reviews.length;
    });
  } //end oninit

  calcWidthPercent(num, allnum) {
    if (num == 0 && allnum == 0) {
      return;
    } else {
      let res = (parseInt(num) / parseInt(allnum)) * 100;

      return Math.floor(res);
    }
  }

  decreac() {
    if (this.count > 1) {
      return this.count--;
    }
  }

  increase() {
    if (this.count < this.product.quantity) {
      return this.count++;
    }
  }

  addToWishList() {
    if (this.isLogin) {
      if (this.isLike) {
        this.wishlistService
          .removeToWishList(this.product._id)
          .subscribe((res: any) => {
            if (res.message == 'REMOVED_SUCCESSFULLY') {
              this.isLike = false;
            }
          });
      } else {
        this.wishlistService
          .addToWishList(this.product._id)
          .subscribe((res: any) => {
            if (res.message == 'ADDED_SUCCESSFULLY') {
              this.isLike = true;
            }
          });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  addToCart() {
    console.log('before', this.product);

    this.cartService.addProduct(this.product, this.count);
    console.log('after', this.product);

    Swal.fire('Added', '', 'success');
  }
}

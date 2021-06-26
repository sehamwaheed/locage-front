import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductModel } from '../Models/ProductModel';
import { Review } from '../Models/Review';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
import { map } from 'rxjs/operators';


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
  isLoding: boolean = true;
  product: ProductModel = null;
  reviews: Review[] = [];
  totalRate: number = 0;
  rate1: number = 0;
  rate2: number = 0;
  rate3: number = 0;
  rate4: number = 0;
  rate5: number = 0;
  max = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productServices.getProductById(this.id).subscribe((pro: any) => {

      this.product = pro;
      this.isLoding = false;
    });

    this.productServices.getAllReview(this.id);
    this.productServices.getReviewsWithoutLoad().subscribe((r: any) => {
      this.reviews = r?.result?.docs;
      console.log("helo",this.reviews);

      this.rate1 = r.Rate1;
      this.rate2 = r.Rate2;
      this.rate3 = r.Rate3;
      this.rate4 = r.Rate4;
      this.rate5 = r.Rate5;

      this.totalRate = r.totalRating;
      this.max = this.reviews.length;
    });
  }//end oninit




  calcWidthPercent(num, allnum) {

    let res = (parseInt(num) / parseInt(allnum)) * 100;

    return res;
  }

  decreac() {
    if (this.count > 1) {
      return this.count--;
    }
  }

  addToCart() {
    this.cartService.addProduct(this.product, this.count);
    Swal.fire('Added', '', 'success');
  }
}

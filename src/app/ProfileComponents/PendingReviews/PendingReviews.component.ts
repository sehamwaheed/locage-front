import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-PendingReviews',
  templateUrl: './PendingReviews.component.html',
  styleUrls: ['./PendingReviews.component.scss'],
})
export class PendingReviewsComponent implements OnInit {
  isLoding: boolean = true;
  isempty: boolean = true;
  product: ProductModel[] = [];
  selectedProduct: ProductModel = null;
  showModalBox: boolean = false;
  rate: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProductNeededToReview().subscribe(
      (data: any) => {
        this.product = data[0]?.docs;        
        this.isLoding = false;
        if (this.product) {
          this.isempty = false;
        } else {
          this.isempty = true;
        }
      },
      () => {
        this.isLoding = false;
        this.isempty = true;
      }
    );

    this.productService.getProductsWithoutLoad().subscribe((data) => {
      this.product = [...data];
      this.isLoding = false;
      if (this.product) {
        this.isempty = false;
      } else {
        this.isempty = true;
      }
    });
  }

  onSelected(event, btn: HTMLButtonElement) {
    this.selectedProduct = this.product.find((p) => {
      return p._id == event;
    });
    btn.click();
  }

  addReview(comment, close: HTMLButtonElement) {
    close.click();
    this.productService
      .addYourReview(this.selectedProduct._id, comment, this.rate)
      .subscribe(
        () => {
          let update = this.product.filter((p) => {
            return p._id != this.selectedProduct._id;
          });

          this.productService.productsLoad.next([...update]);
        },
        () => {}
      );
  }
}

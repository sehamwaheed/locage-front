import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { Review } from '../Models/Review';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private userService: UserService) {}

  products: ProductModel[] = [];
  reviews: Review[] = [];
  productsLoad = new Subject<ProductModel[]>();
  reviewsLoad = new Subject<Review[]>();

  private readonly api = 'https://locage.herokuapp.com/api/v1/products';

  getProducts() {
    return this.http
      .get<{ products: ProductModel[] }>(this.api)
      .subscribe((data: any) => {
        this.products = data?.docs;
        this.productsLoad.next([...this.products]);
      });
  }

  getProductsWithoutLoad() {
    return this.productsLoad.asObservable();
  }
  getReviewsWithoutLoad() {
    return this.reviewsLoad.asObservable();
  }

  getTopDeals() {
    return this.http.get<{ products: ProductModel[] }>(this.api + '/top-deals');
    // .subscribe((data:any)=>{
    //   this.products=data?.result?.docs;
    //   this.productsLoad.next( [...this.products]);
    // })
  }

  updateProducts(data: ProductModel[]) {
    this.productsLoad.next([...data]);
  }

  getTodayDeals() {
    return this.http.get<{ products: ProductModel[] }>(
      this.api + '/today-deals'
    );
    // .subscribe((data:any)=>{
    //   this.products=data?.result?.docs;
    //   this.productsLoad.next( [...this.products]);

    // })
  }

  getProductById(id) {
    return this.http.get<{ product: ProductModel }>(this.api + '/' + id);
  }

  searchByKey(key: string) {
    return this.http.get<{ products: ProductModel[] }>(
      this.api + '/search?key=' + key
    );
  }

  getTopSales() {
    return this.http.get<{ products: ProductModel[] }>(this.api + '/top-sales');
  }

  //https://locage.herokuapp.com/api/v1/reviews/products
  getAllProductNeededToReview() {
    return this.http.get<{ products: ProductModel[] }>(
      'https://locage.herokuapp.com/api/v1/reviews/products'
    );
  }

  addYourReview(id, _comment: string, _rate: number) {
    let review = {
      comment: _comment || '',
      rate: _rate,
    };

    let headers = new HttpHeaders({
      authorization: 'Bearer ' + this.userService.getToken(),
    });
    return this.http.post(
      'https://locage.herokuapp.com/api/v1/reviews/product/' + id,
      review,
      { headers }
    );
  }

  getAllReview(id) {
    return this.http
      .get<{ review: Review[] }>(
        'https://locage.herokuapp.com/api/v1/reviews/product/' + id
      )
      .subscribe((r: any) => {
        this.reviews=r;
        this.reviewsLoad.next(this.reviews)
      });
  }
}

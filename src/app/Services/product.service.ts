
import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  products:ProductModel[]=[ ]
  private productsLoad= new Subject<ProductModel[]>();

private readonly api ="https://locage.herokuapp.com/api/v1/products";

  getProducts(){
    return this.http.get<{products:ProductModel[]}>(this.api).subscribe((data:any)=>{
      console.log(data);
      this.products=data?.docs;
      this.productsLoad.next( [...this.products]);
    });
  }

  getProductsWithoutLoad(){
    return this.productsLoad.asObservable();
  }

  getTopDeals(){
    return this.http.get<{products:ProductModel[]}>(this.api+'/top-deals').subscribe((data:any)=>{
      console.log("top-Deals",data);
      this.products=data?.result?.docs;
      this.productsLoad.next( [...this.products]);
    })
  }

  getTodayDeals(){
    return this.http.get<{products:ProductModel[]}>(this.api+'/today-deals').subscribe((data:any)=>{
      console.log("today deals",data);
      this.products=data?.result?.docs;
      this.productsLoad.next( [...this.products]);
    })
  }
}



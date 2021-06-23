
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
  productsLoad= new Subject<ProductModel[]>();

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
    return this.http.get<{products:ProductModel[]}>(this.api+'/top-deals')
    // .subscribe((data:any)=>{
    //   console.log("top-Deals serveces",data);
    //   this.products=data?.result?.docs;
    //   this.productsLoad.next( [...this.products]);
    // })
  }


  updateProducts(data: ProductModel[]){
    this.productsLoad.next([...data])
  }

  getTodayDeals(){
    return this.http.get<{products:ProductModel[]}>(this.api+'/today-deals')
    // .subscribe((data:any)=>{
    //   console.log("today deals servece",data);
    //   this.products=data?.result?.docs;
    //   this.productsLoad.next( [...this.products]);

    // })
  }


  getProductById(id){
    return this.http.get<{product:ProductModel}>(this.api+'/'+id);

  }


  searchByKey(key:string){
    return this.http.get<{products:ProductModel[]}>(this.api +'/search?key='+key)

  }

  getTopSales(){
    return this.http.get<{products:ProductModel[]}>(this.api+'/top-sales')
  }

}



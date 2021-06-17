import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  products:ProductModel[]=[];

  private readonly api="https://locage.herokuapp.com/api/v1/subcategory"
  constructor(private http:HttpClient) {

  }


  getProductByCategory(id){
    return this.http.get(this.api+'/'+id +'/products?page=1&limit=30');
  }
}

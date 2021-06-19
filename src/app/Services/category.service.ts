import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/category/';
  //https://locage.herokuapp.com/api/v1/category/:id/subcategory
  componentNameLoaded$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  constructor(private http: HttpClient) {}
  getComponentNameLoaded(){
    return this.componentNameLoaded$.asObservable()
  }
  getAll() {
    return this.http.get(`${this.uri}all`);
  }
  getCategories() {
    return this.http.get(`${this.uri}`);
  }
  getSubCategoriesAndCategory(categoryId: string) {
    return this.http.get(`${this.uri}${categoryId}`);
  }
  getSubCategoriesByCategoryId(categoryId:any) {
    //https://locage.herokuapp.com/api/v1/category/:id/subcategory
    return this.http.get(this.uri+categoryId+'/subcategory');

  }
}

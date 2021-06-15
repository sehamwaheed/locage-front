import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/category/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.uri}all`);
  }
  getCategories() {
    return this.http.get(`${this.uri}`);
  }
  getSubCategoriesAndCategory(categoryId: string) {
    return this.http.get(`${this.uri}${categoryId}`);
  }
  getSubCategoriesByCategoryId(categoryId: string) {
    return this.http.get(`${this.uri}${categoryId}/subcategory`);
  }
}

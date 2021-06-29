import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubCategoryModel } from '../Models/subCategoryModel';
import { Subject } from 'rxjs';
import { CategoryModel } from '../Models/categoryModel';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private uri: String = 'https://locage.herokuapp.com/api/v1/category/';
  //https://locage.herokuapp.com/api/v1/category/top-category
  componentNameLoaded$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    subCategoryLoad= new Subject<SubCategoryModel[]>();
  subCategory:SubCategoryModel[]=[]
  constructor(private http: HttpClient) {}
  getComponentNameLoaded(){
    return this.componentNameLoaded$.asObservable()
  }

  getSubcategorywithoutLoad(){
    return this.subCategoryLoad.asObservable();
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
    return this.http.get(this.uri+categoryId+'/subcategory').subscribe((c:any)=>{

      this.subCategory=c.result;
      this.subCategoryLoad.next([...this.subCategory])
    });

  }

  getTopCategory(){
    return this.http.get<{categoer:CategoryModel[]}>(this.uri+'/top-category');
  }

}

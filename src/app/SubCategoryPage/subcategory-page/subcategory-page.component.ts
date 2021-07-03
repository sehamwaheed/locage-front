import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductModel } from 'src/app/Models/ProductModel';
import { SubCategoryModel } from 'src/app/Models/subCategoryModel';
import { ProductService } from 'src/app/Services/product.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrls: ['./subcategory-page.component.scss'],
})
export class SubcategoryPageComponent implements OnInit {
  products: ProductModel[] = [];
  subcategoryId: SubCategoryModel = null;
  isLoding: boolean = true;
  isempty: boolean = false;
  sarchWord: any;
  constructor(
    private productservices: ProductService,
    private subcategory: SubCategoryService,
    private activRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRout.queryParams.subscribe((e) => {
      if (e.key) {
        this.sarchWord = e.key;
        this.search();
      }

      if(e.type && e.type == "topdeals"){
        this.loadTopDeals();
      }

      if (e.type && e.type == "topsales") {
        this.loadTopSales();
      }

      if(e.type && e.type =="todaydeals"){
        this.loadTodayDeals();
      }

    });
    this.activRout.params.subscribe((url) => {

      if (url.id) {
        this.subcategoryId = url.id;

        this.subcategory.getProductByCategory(this.subcategoryId).subscribe(
          (data: any) => {

            this.products = data?.result?.docs;
            this.productservices.updateProducts(this.products);
            this.isLoding = false;
            this.isempty = false;
          },
          () => {
            this.isempty = true;
            this.isLoding = false;
          }
        );
      }
    });

  }

  listenFilterColor(data) {
    this.products = data;
  }

  search(){
    this.productservices.searchByKey(this.sarchWord).subscribe((k:any) => {

      this.products = k?.result?.docs;
      this.productservices.updateProducts(this.products);
      this.isLoding = false;
      this.isempty = false;
    },
    () => {
      this.isempty = true;
      this.isLoding = false;
    }
    );
  }

  loadTopDeals(){
    this.productservices.getTopDeals().subscribe((k:any) => {

      this.products = k?.result?.docs;
      this.productservices.updateProducts(this.products);
      this.isLoding = false;
      this.isempty = false;
    },
    () => {
      this.isempty = true;
      this.isLoding = false;
    }
    );
  }

  loadTopSales(){
    this.productservices.getTopSales().subscribe((k:any) => {

    k?.result.forEach((p:any) => {
      this.products.push(p?.product)
    });
      this.productservices.updateProducts(this.products);
      this.isLoding = false;
      this.isempty = false;
    },
    () => {
      this.isempty = true;
      this.isLoding = false;
    }
    );
  }

  loadTodayDeals(){
    this.productservices.getTodayDeals().subscribe((k:any) => {

      this.products = k?.result?.docs;
      this.productservices.updateProducts(this.products);
      this.isLoding = false;
      this.isempty = false;
    },
    () => {
      this.isempty = true;
      this.isLoding = false;
    }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/Models/ProductModel';
import { SubCategoryModel } from 'src/app/Models/subCategoryModel';
import { ProductService } from 'src/app/Services/product.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrls: ['./subcategory-page.component.scss']
})
export class SubcategoryPageComponent implements OnInit {

products:ProductModel[]=[];
 subcategoryId:SubCategoryModel=null;
isLoding:boolean=true;
isempty:boolean=false;
  constructor( private productservices :ProductService,private subcategory:SubCategoryService,private activRout:ActivatedRoute) { }

  ngOnInit(): void {

    this.activRout.params.subscribe((url)=>{
         this.subcategoryId=url.id;

      this.subcategory.getProductByCategory(this.subcategoryId).subscribe((data:any)=>{

        console.log("yarab",data);

        this.products=data?.result?.docs;
        this.isLoding=false;
        this.isempty=false;

      }
      ,()=>{

        this.isempty=true;
        this.isLoding=false;
      }
      )

    })


    //  this.productservices.getProducts();
    //  this.productservices.getProductsWithoutLoad().subscribe((pro)=>{
    //       console.log(pro);

    //   this.products=pro;
    //     console.log(this.products);

    //  })
  }

listenFilterColor(data){
  this.products=data;
  console.log(this.products);
console.log("data",data);


}

}

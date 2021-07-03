import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryModel } from '../Models/subCategoryModel';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-sub-category-in-ctegory',
  templateUrl: './sub-category-in-ctegory.component.html',
  styleUrls: ['./sub-category-in-ctegory.component.scss']
})
export class SubCategoryInCtegoryComponent implements OnInit {
  id: any;
   sub: SubCategoryModel[]=[];
  constructor(private categoryServices:CategoryService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id= this.activatedRoute.params
    .subscribe((url)=>{
      this.categoryServices.getSubCategoriesByCategoryId(url.id);
      this.categoryServices.getSubcategorywithoutLoad().subscribe((c:any)=>{
          this.sub=c;

      })

    });


  }
  navigatToSubcategory(subId){

    this.router.navigate(['/home/subcategory',subId])
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private categoryServices:CategoryService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.activatedRoute.snapshot.params.id;
    console.log(this.id);

    this.categoryServices.getSubCategoriesByCategoryId(this.id).subscribe((c:any)=>{
        console.log("subCtegory",c);

    })

  }


}

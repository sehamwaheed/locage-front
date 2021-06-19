import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CategoryModel } from 'src/app/Models/categoryModel';
import { SubCategoryModel } from 'src/app/Models/subCategoryModel';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss'],
})
export class SubNavbarComponent implements OnInit {
  categories!: CategoryModel[];
   subc:SubCategoryModel[];
  constructor(private categoryService: CategoryService,private router:Router) {
       this.categoryService.getAll().subscribe(
      (result: any) => {
        this.categories = result.result;
        console.log("sub",result.result);

      },
      (err) => {}
    );
  }

  ngOnInit(): void {

  }

  // changeSub(sub){
  //   console.log(sub);
  //     this.categoryService.componentNameLoaded$.next(sub.name)
  // }

  navigatToSub(sub){
    console.log("wb3den",sub);

    this.router.navigate(['home/sub',sub]);
  }


}

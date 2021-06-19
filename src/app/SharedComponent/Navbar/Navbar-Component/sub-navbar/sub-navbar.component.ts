import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryModel } from 'src/app/Models/categoryModel';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss'],
})
export class SubNavbarComponent implements OnInit {
  categories!: CategoryModel[];

  constructor(private categoryService: CategoryService) {
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

  changeSub(sub){
    console.log(sub);
      this.categoryService.componentNameLoaded$.next(sub.name)
  }
}

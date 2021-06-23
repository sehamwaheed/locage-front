import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  @Input('category') categories=[ ]
  navigatToSub(subId){
    this.router.navigate(['/home/subcategory',subId])
  }
}

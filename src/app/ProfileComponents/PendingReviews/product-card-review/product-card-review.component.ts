import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card-review',
  templateUrl: './product-card-review.component.html',
  styleUrls: ['./product-card-review.component.scss']
})
export class ProductCardReviewComponent implements OnInit {
  @Input('img') img:string='';
  @Input('proudct-name') titel:string='proudact title';
  @Input ('proudct-details') info:string='details of proudct';
  @Input ('rate') rate:number=3;
  @Input('price') price:number=0;
  @Input('id') id:any=null;
  @Output('review') review =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onReview(){

    this.review.emit(this.id);
  }
}

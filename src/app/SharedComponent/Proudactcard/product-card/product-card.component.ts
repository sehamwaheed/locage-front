import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('discount') discount:number=0;
  @Input('img') img:string='';
  @Input('proudct-name') titel:string='proudact title';
  @Input ('proudct-details') info:string='details of proudct';
  @Input ('rate') rate:number=0;
  @Input('price') price:number=0;



  constructor() { }

  ngOnInit(): void {
  }

}

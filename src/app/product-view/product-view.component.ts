import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
 rate=4;
 quantityOrder=20;
 @Input('count') count:number=1;
 colorText:string="red";
 back:string="#184052"
  constructor() { }

  ngOnInit(): void {
  }


  decreac(){
    if(this.count > 1){
     return this.count--;
    }
  }
}

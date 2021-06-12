import { ProductService } from './../../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';

@Component({
  selector: 'app-layout-product',
  templateUrl: './layout-product.component.html',
  styleUrls: ['./layout-product.component.scss']
})
export class LayoutProductComponent implements OnInit {

  constructor( private product:ProductService) {

   }

  ngOnInit(): void {
      this.products=this.product.getProducts();
  }
  islist:boolean=false;

  changeToList(){
      this.islist=true;
  };
  changeToAppe(){
     this.islist=false;
  }

  products : ProductModel[] ;


    sortPriceLowest(){
      this.products.sort((a,b)=>{return a.price - b.price })
    }

    sortPricebigest(){
      this.products.sort((a,b)=>{return b.price - a.price})
    }

}

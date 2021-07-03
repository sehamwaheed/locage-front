import { ProductService } from './../../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-product',
  templateUrl: './layout-product.component.html',
  styleUrls: ['./layout-product.component.scss']
})
export class LayoutProductComponent implements OnInit {

  @Input('products') products:ProductModel []=[] ;
  constructor(private router:Router ) {

   }

  ngOnInit(): void {

  }
  islist:boolean=false;

  changeToList(){
      this.islist=true;
  };
  changeToAppe(){
     this.islist=false;
  }




    sortPriceLowest(){
      this.products.sort((a,b)=>{return a.price - b.price })
    }

    sortPricebigest(){
      this.products.sort((a,b)=>{return b.price - a.price})
    }

}

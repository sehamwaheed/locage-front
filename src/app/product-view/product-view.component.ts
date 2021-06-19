import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../Models/ProductModel';
import { ProductService } from '../Services/product.service';

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
id:any;
isLoding:boolean=true;
 product:ProductModel=null;
  constructor(private activatedRoute: ActivatedRoute, private productServices:ProductService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params.id;
    this.productServices.getProductById(this.id).subscribe((pro:any)=>{
      console.log(pro);
      this.product=pro;
      this.isLoding=false;
    })
  }


  decreac(){
    if(this.count > 1){
     return this.count--;
    }
  }
}

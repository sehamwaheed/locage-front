import { ProductService } from './../../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductModel } from 'src/app/Models/ProductModel';
@Component({
  selector: 'app-productContainer',
  templateUrl: './productContainer.component.html',
  styleUrls: ['./productContainer.component.scss']
})
export class ProductContainerComponent implements OnInit {
 @Input() products : ProductModel[] ;
 @Input() title :string ;

  constructor(private product:ProductService) { }

  ngOnInit() {

//  this.product.getTopDeals();
//    this.product.getProductsWithoutLoad().subscribe((p)=>{
//      console.log(p);
//      this.products=p;
//      console.log(this.products);

//    })
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200:{
        items:6
      }
    },
    nav: false
  }

}


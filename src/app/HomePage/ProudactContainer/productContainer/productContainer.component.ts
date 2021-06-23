import { ProductService } from './../../../Services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductModel } from 'src/app/Models/ProductModel';
import { Router } from '@angular/router';


enum type{
  topdeals = 1,
  todaydeals = 2,
  topsales = 3
}


@Component({
  selector: 'app-productContainer',
  templateUrl: './productContainer.component.html',
  styleUrls: ['./productContainer.component.scss']
})
export class ProductContainerComponent implements OnInit {
 @Input() products : ProductModel[] ;
 @Input() title :string ;
@Input('type') typeNumber: number;

  constructor(private product:ProductService, private router: Router) { }

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


  showMorehandler(){
    this.router.navigate(['/home/subcategory'], { queryParams: { type: type[this.typeNumber] } });
  }
}


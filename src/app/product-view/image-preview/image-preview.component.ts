import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {

  scrImg:any;

  constructor() {


   }
 imgProduct=[
    'assets/images/xbox_PNG101377.png',
    'assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png',
   'assets/images/beauty.png',
    'assets/images/12-122374_imac-pro-black-png-transparent-png-removebg-preview.png',
   'assets/images/xbox_PNG101377.png',
   'assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png',
  'assets/images/beauty.png',
   'assets/images/12-122374_imac-pro-black-png-transparent-png-removebg-preview.png',

  ]




  ngOnInit(): void {
    this.scrImg =this.imgProduct[0];

  }


  showImg(url){
    this.scrImg=url;
 ;

  }

  plusQuantiti(){

  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 6
      },
      576:{
        items:7
      },
      740: {
        items:8
      },
      940: {
        items: 9
      }
    },
    nav: false,
  }

}

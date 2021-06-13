import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {

  constructor() { }
 imgProduct=[
    'assets/images/baners/baner38.gif',
    'assets/images/baners/baner37.gif',
    'assets/images/baners/baner1.png',
     'assets/images/baners/baner2.png',
     'assets/images/baners/baner3.png',
     'assets/images/baners/baner4.png',
  ]


  scrImg=this.imgProduct[0];

  ngOnInit(): void {
  }

  showImg(url){
    this.scrImg=url;
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      },

    },
    nav: false
  }

}

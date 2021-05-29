import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Adv',
  templateUrl: './Adv.component.html',
  styleUrls: ['./Adv.component.scss']
})
export class AdvComponent implements OnInit {

  constructor() { }

  Adv=[
    'assets/images/baners/baner38.gif',
    'assets/images/baners/baner37.gif',
    'assets/images/baners/baner1.png',
     'assets/images/baners/baner2.png',
     'assets/images/baners/baner3.png',
     'assets/images/baners/baner4.png',
     'assets/images/baners/baner5.gif',
     'assets/images/baners/baner6.png',
     'assets/images/baners/baner7.png',
     'assets/images/baners/baner8.png',
     'assets/images/baners/baner9.webp',
     'assets/images/baners/banner14.webp',
     'assets/images/baners/banner5.webp',
     'assets/images/baners/banner6.webp',
     'assets/images/baners/banner7.webp',
     'assets/images/baners/banner9.webp',
     'assets/images/baners/banner10.webp',
     'assets/images/baners/baner16.jpg',
     'assets/images/baners/baner17.jpg',
     'assets/images/baners/baner18.jpg',
     'assets/images/baners/baner19.jpg',
     'assets/images/baners/baner20.jpg',
     'assets/images/baners/baner21.jpg',
     'assets/images/baners/baner22.jpg',
     'assets/images/baners/baner23.jpg',
     'assets/images/baners/baner24.jpg',
     'assets/images/baners/baner25.jpg',
     'assets/images/baners/baner26.jpg',
     'assets/images/baners/baner27.jpg',
     'assets/images/baners/baner28.png',
     'assets/images/baners/baner29.png',
     'assets/images/baners/baner30.jpg',
     'assets/images/baners/banner1.webp',
     'assets/images/baners/baner32.jpg',
     'assets/images/baners/baner33.jpg',
     'assets/images/baners/baner34.jpg',

  ]
  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}

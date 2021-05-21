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
    'assets/images/nat-8.jpg',
     'assets/images/OPPOA54.png',
     'assets/images/nat-10.jpg'
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  categories=[
    {
      title: 'Supermarket',

      img: 'assets/images/beauty.png',
    },
    {
      title: 'Fashion',

      img: 'assets/images/fashion (1).png',
    },
    {
      title: 'Health & Beauty',

      img: 'assets/images/fashion (5).png',
    },
    {
      title: 'Home & office',

      img: 'assets/images/fashion (6).png',
    },
    {
      title: 'Electronics',

      img: 'assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png',
    },
    {
      title: 'Computing',

      img: 'assets/images/12-122374_imac-pro-black-png-transparent-png-removebg-preview.png',
    },
    {
      title: 'Sporting Goods',

      img: 'assets/images/sportwear.png',
    },
    {
      title: 'Gaming',

      img: 'assets/images/xbox_PNG101377.png',
    },
    {
      title: 'Automobile',

      img: 'assets/images/png-clipart-tent-tent-removebg-preview.png',
    },
  ]

}

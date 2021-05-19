import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent implements OnInit {

  catgories=[
    {
      main:'Supermarket',
      sub:['food cupboard','beverages',`canned,jarred&packaged foods`,`laundry`,`beverages`,`breakfast foods`,` household cleaning` ]
    },
    {main:'Fashion',
      sub:[`women's fashion`,`men's fashion`,`kid's fashion`]
     },
  {
     main:`Health&beauty`,
     sub:[`beauty&personal care`,`makeup`,`hair care`,`fragrance`,`health care`]
  },
  {
    main:`Home&office`,
    sub:[`home&kitchen`,`office products`,` heating,cooling&air quality`,`tools&home improvement`,`small appliances`,`appliances`,`cooking appliances`]
  },
  {
    main: 'Electronics',
    sub: [
      `TV/Video`,
      `Home audio`,
      `Cameras`,
      `Headphones`,
      `Phones & Tablets`,
    ],
  },
  {
    main: 'Computing',
    sub: [
      'Laptops',
      'Computer components',
      'Networking products',
      'Data storage',
      'Computer accessories',
    ],
  },
  {
    main: 'Sporting Goods',
    sub: [
      'Sports wear',
      'Sports equipment',
      'Outdoor & Adventure',
      'Accessories',
    ],
  },
  {
    main: 'Gaming',
    sub: ['Video gaming', 'Arts/Crafts', 'Puppets', 'Scooters & Wagons'],
  },
  {
    main: 'Automobile',
    sub: [
      'Car care',
      'Oils/Fluids',
      'Interior accessories',
      'Exterior accessories',
    ],
  },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

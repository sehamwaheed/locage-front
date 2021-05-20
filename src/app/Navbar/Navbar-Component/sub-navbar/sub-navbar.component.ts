import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent implements OnInit {
  Categories = [
    {
      main: 'Supermarket',
      sub: [
        'food cupboard',
        'beverages',
        'canned,jarred&packaged foods',
        'laundry',
        'beverages',
        'breakfast foods',
        'household cleaning',
      ],
      icon: 'fas fa-store',
    },
    {
      main: 'Fashion',
      sub: [`women's fashion`, `men's fashion`, `kid's fashion`],
      icon: 'fas fa-tshirt',
    },
    {
      main: 'Health & Beauty',
      sub: [
        'Beauty & Personal care',
        `Makeup`,
        `Hair care`,
        `Fragrance`,
        `Health care`,
      ],
      icon: 'fas fa-heart',
    },
    {
      main: 'Home & office',
      sub: [
        `Home & kitchen`,
        `Office products`,
        ` Heating,Cooling & Air quality`,
        `Tools & Home improvement`,
        `Small appliances`,
        `Appliances`,
        `Cooking appliances`,
      ],
      icon: 'fas fa-couch',
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
      icon: 'fas fa-lightbulb',
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
      icon: 'fas fa-desktop',
    },
    {
      main: 'Sporting Goods',
      sub: [
        'Sports wear',
        'Sports equipment',
        'Outdoor & Adventure',
        'Accessories',
      ],
      icon: 'fas fa-football-ball',
    },
    {
      main: 'Gaming',
      sub: ['Video gaming', 'Arts/Crafts', 'Puppets', 'Scooters & Wagons'],
      icon: 'fas fa-gamepad',
    },
    {
      main: 'Automobile',
      sub: [
        'Car care',
        'Oils/Fluids',
        'Interior accessories',
        'Exterior accessories',
      ],
      icon: 'fas fa-car',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

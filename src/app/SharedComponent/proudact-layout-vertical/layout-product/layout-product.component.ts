import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-product',
  templateUrl: './layout-product.component.html',
  styleUrls: ['./layout-product.component.scss']
})
export class LayoutProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  islist:boolean=false;

  changeToList(){
      this.islist=true;
  };
  changeToAppe(){
     this.islist=false;
  }

  products=[
    {
      discount:"",
      imgName:"../../../../assets/images/xbox_PNG101377.png",
      proudactName:"Xbox Serices X",
      productDetails:"4k Gaming 120 fps 1T ssd",
      productRating:"4",
      prouductPrice:"30:00"
    },
    {
      discount:"%15",
      imgName:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
      proudactName:"Bicycle Huffy ",
      productDetails:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
      productRating:"4",
      prouductPrice:"80:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
      productRating:"4",
      prouductPrice:"110:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
      productRating:"4",
      prouductPrice:"650:00"
    },
    {
      discount:"%10",
      imgName:"../../../../assets/images/xbox_PNG101377.png",
      proudactName:"Xbox Serices X",
      productDetails:"4k Gaming 120 fps 1T ssd",
      productRating:"4",
      prouductPrice:"30:00"
    },
    {
      discount:"%15",
      imgName:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
      proudactName:"Bicycle Huffy ",
      productDetails:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
      productRating:"4",
      prouductPrice:"80:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
      productRating:"4",
      prouductPrice:"110:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
      productRating:"4",
      prouductPrice:"650:00"
    },
    {
      discount:"%10",
      imgName:"../../../../assets/images/xbox_PNG101377.png",
      proudactName:"Xbox Serices X",
      productDetails:"4k Gaming 120 fps 1T ssd",
      productRating:"4",
      prouductPrice:"30:00"
    },
    {
      discount:"%15",
      imgName:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
      proudactName:"Bicycle Huffy ",
      productDetails:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
      productRating:"4",
      prouductPrice:"80:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
      productRating:"4",
      prouductPrice:"110:00"
    },
    {
      discount:"%10",
      imgName:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
      proudactName:"Smart Watch ",
      productDetails:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
      productRating:"4",
      prouductPrice:"650:00"
    },
  ]

}

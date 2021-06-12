
import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products:ProductModel[]=[
    {
      id:123,
      title:'Bicycle Huffy',
      description:'Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)',
      discount:15,
      price:50,
      sku:'1d5s6v',
      quantity:11,
      size:'L',
      Weight:40,
      photos:['assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png'],
      rating:4,
      UnitePerOrder:19,
      brand:'oppo',
      color: ['red'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:132,
      title:'Smart Watch',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:10,
      price:30,
      sku:'1dps6v',
      quantity:20,
      size:'25x87',
      Weight:40,
      photos:["assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png"],
      rating:3,
      UnitePerOrder:30,
      brand:'oppo',
      color: ['red','green'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:134,
      title:'Xbox Serices X',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:10,
      price:30,
      sku:'1dps6v',
      quantity:20,
      size:'25x87',
      Weight:40,
      photos:["assets/images/xbox_PNG101377.png"],
      rating:4,
      UnitePerOrder:40,
      brand:'samsung',
      color: ['red','green','black'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:234,
      title:'Xbox Serices X',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:10,
      price:30,
      sku:'1dps6v',
      quantity:20,
      size:'25x87',
      Weight:40,
      photos:["assets/images/xbox_PNG101377.png"],
      rating:4,
      UnitePerOrder:40,
      brand:'samsung',
      color: ['red','green','black'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:123,
      title:'Bicycle Huffy',
      description:'Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)',
      discount:15,
      price:50,
      sku:'1d5s6v',
      quantity:11,
      size:'L',
      Weight:40,
      photos:['assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png'],
      rating:4,
      UnitePerOrder:19,
      brand:'oppo',
      color: ['red'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:1789,
      title:'Smart Watch',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:20,
      price:30,
      sku:'1dps6v',
      quantity:50,
      size:'30x78',
      Weight:50,
      photos:["assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png"],
      rating:4,
      UnitePerOrder:50,
      brand:'apple',
      color: ['red','green','selver','black'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:964,
      title:'Xbox Serices X',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:12,
      price:30,
      sku:'1dps6v',
      quantity:20,
      size:'25x87',
      Weight:700,
      photos:["assets/images/xbox_PNG101377.png"],
      rating:5,
      UnitePerOrder:40,
      brand:'sony',
      color: ['red','green','white','gold'],
      subcategory: null,
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },
    {
      id:234,
      title:'Xbox Serices X',
      description:'description:Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor',
      discount:10,
      price:30,
      sku:'1dps6v',
      quantity:20,
      size:'25x87',
      Weight:40,
      photos:["assets/images/xbox_PNG101377.png"],
      rating:4,
      UnitePerOrder:40,
      brand:'samsung',
      color: ['red','green','black'],
      subcategory: 'Gaming',
      vendor: null,
      proudactSpecification:`About this item All-day Activity Tracking: This smart watch has 7 kinds of sports modes (Walking, Running, Cycling, Skipping, Badminton, Basketball, Football). The watch display shows your accurate steps, distance, calories, active minutes and you can see more detailed data on App
                                Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health.(NOTE: the data cannot be used as a medical-grade test`
    },

  ]

  getProducts(): ProductModel[]{
    return [...this.products];
  }
}


 // {
    //   discount:"%15",
    //   photos:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
    //   title:"Bicycle Huffy ",
    //   description:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
    //   rating:"4",
    //   price:"80:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
    //   rating:"4",
    //   price:"110:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
    //   rating:"4",
    //   price:"650:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"../../../../assets/images/xbox_PNG101377.png",
    //   title:"Xbox Serices X",
    //   description:"4k Gaming 120 fps 1T ssd",
    //   rating:"4",
    //   price:"30:00"
    // },
    // {
    //   discount:"%15",
    //   photos:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
    //   title:"Bicycle Huffy ",
    //   description:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
    //   rating:"4",
    //   price:"80:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
    //   rating:"4",
    //   price:"110:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
    //   rating:"4",
    //   price:"650:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"../../../../assets/images/xbox_PNG101377.png",
    //   title:"Xbox Serices X",
    //   description:"4k Gaming 120 fps 1T ssd",
    //   rating:"4",
    //   price:"30:00"
    // },
    // {
    //   discount:"%15",
    //   photos:"assets/images/png-clipart-kross-sa-bicycle-shop-mountain-bike-kellys-bicycle-removebg-preview.png",
    //   title:"Bicycle Huffy ",
    //   description:"Huffy Hardtail Mountain Bike, Stone Mountain, 24 inch 21-Speed, Lightweight, Purple (74818)",
    //   rating:"4",
    //   price:"80:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/imgbin-apple-watch-apple-store-wearable-technology-smartwatch-bluetooth-NmMUFczJkYMrnAnsYZdD4TThX-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"Fitpolo Smart Watch for Android Phones Compatible with iPhone IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor",
    //   rating:"4",
    //   price:"110:00"
    // },
    // {
    //   discount:"%10",
    //   photos:"assets/images/kisspng-apple-imac-retina-5k-27-2017-macintosh-macbook-Сервисный-центр-по-ремонту-5b661851c62e14.7061241415334175538118-removebg-preview.png",
    //   title:"Smart Watch ",
    //   description:"SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)",
    //   rating:"4",
    //   price:"650:00"
    // },

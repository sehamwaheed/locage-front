import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  topDeals =[];
  todayDeals =[];
  topSales=[];
  topCategory=[]
  isLoding:boolean=true;
  constructor(
    private product:ProductService,
    private category:CategoryService
  ) { }

  ngOnInit() {
     this.product.getTopDeals().subscribe((data:any)=>{
      console.log("top-Deals serveces",data);
      this.topDeals=data?.result?.docs;
      this.isLoding=false;
    })
    //  this.product.getProductsWithoutLoad().subscribe((p)=>{
    //  console.log("top deals",p);
    //  this.topDeals=p;
    //  console.log("top deals",this.topDeals);
    //  this.isLoding=false;

    // })

    this.product.getTodayDeals().subscribe((data:any)=>{
      console.log("today deals servece",data);
      this.todayDeals=data?.result?.docs;
      this.isLoding=false;

    })

    // this.product.getProductsWithoutLoad().subscribe((p)=>{
    //   console.log("today deals");

    //   console.log(p);
    //   this.todayDeals=p;
    //   console.log("today deals",this.todayDeals);
    //   this.isLoding=false;

    // })

   this.product.getTopSales().subscribe((data:any)=>{
     console.log("top-sales",data);
     data?.result.forEach((_products: any) => {
       this.topSales.push(_products.product)
     });
     this.isLoding=false;

   })

   this.category.getTopCategory().subscribe((data:any)=>{
      data.result.forEach((categ:any) => {
          this.topCategory.push(categ.subcategory)
      });
      this.isLoding=false;
   })

  }

}

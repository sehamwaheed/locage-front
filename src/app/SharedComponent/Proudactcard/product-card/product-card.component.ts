import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('discount') discount:number=0;
  @Input('img') img:string='';
  @Input('proudct-name') titel:string='proudact title';
  @Input ('proudct-details') info:string='details of proudct';
  @Input ('rate') rate:number=0;
  @Input('price') price:number=0;
  @Input('id') id:any=null;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigatToProduct(){
    this.router.navigate(['home/view',this.id]);
  }




}

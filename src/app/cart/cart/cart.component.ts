import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input('discount') discount:number=0;
  @Input('img') img:string='';
  @Input('proudct-name') titel:string='proudact title';
  @Input ('proudct-details') info:string='details of proudct';
  @Input ('rate') rate:number=0;
  @Input('price') price:number=10;
  @Input('id') id:any=null;
  @Input('count') count:number=1;
  @Input('total_price') total_price:number=0;
  quantity:number=40;
  constructor() { }

  ngOnInit(): void {
  }

increase(){
  if(this.count < this.quantity){

     this.count++;
    this.totalPrice();
  }

}


decreac(){
  if(this.count > 1){
    this.count--;
   this.totalPrice();
  }

}

totalPrice(){
  return  this.total_price=this.price*this.count;
}

}

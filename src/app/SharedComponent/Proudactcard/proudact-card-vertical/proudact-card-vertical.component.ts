import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proudact-card-vertical',
  templateUrl: './proudact-card-vertical.component.html',
  styleUrls: ['./proudact-card-vertical.component.scss']
})
export class ProudactCardVerticalComponent implements OnInit {

  @Input('img') img:string='';
  @Input('proudct-name') titel:string='proudact title';
  @Input ('proudct-details') info:string='details of proudct';
  @Input ('rate') rate:number=3;
  @Input('price') price:number=0;
  constructor() { }

  ngOnInit(): void {
  }



}

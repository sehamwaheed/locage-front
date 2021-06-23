import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-sideCart',
  templateUrl: './sideCart.component.html',
  styleUrls: ['./sideCart.component.scss']
})
export class SideCartComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}

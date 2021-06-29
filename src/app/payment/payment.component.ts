import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../Models/ProductModel';
import { ShipmentModel } from '../Models/shipmentModel';
import { CartService } from '../Services/cart.service';
import { OrderService } from '../Services/order.service';
import { ShipmentService } from '../Services/shipment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  products?: ProductModel[];
  defaultShipment?: ShipmentModel;
  cart?: any;
  clientToken?: any;
  constructor(
    private cartService: CartService,
    private shipmentService: ShipmentService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.cartService.getProductFromRequest().subscribe((result: any) => {
      this.products = result.result;
    });
    this.cartService.getUserCart().subscribe((result: any) => {
      this.cart = result.result[0];
    });
    this.shipmentService.getPrimary().subscribe((result: any) => {
      this.defaultShipment = result.result;
    });
  }

  ngOnInit(): void {}

  checkOut(nonce: string) {
    var body = {
      nonce: nonce,
      shipmentAndDiscount: {
        shipmentId: this.defaultShipment._id,
      },
    };
    this.orderService.checkOut(body).subscribe((result: any) => {
      if (result.message == 'Order placed successfully.') {
        this.router.navigate(['home/order-status', 'ok']);
      } else {
        this.router.navigate(['home/order-status', 'error']);
      }
    });
  }
}

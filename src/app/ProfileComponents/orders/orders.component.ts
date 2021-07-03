import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[];
  isLoading: boolean = true;
  isEmpty: boolean = true;
  constructor(private orderService: OrderService) {
    // this.orderService.getUserOrders().subscribe(
    //   (result: any) => {
    //     console.log(result);

    //     this.isLoading = false;
    //     if (this.orders) {
    //       this.isEmpty = false;
    //     } else {
    //       this.isEmpty = true;
    //     }
    //   },
    //   (error) => {}
    // );
  }
  ngOnInit(): void {}
}

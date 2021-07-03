import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() item: any;
  product?:ProductModel;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (this.item) {
      this.productService.getProductById(this.item.productId).subscribe((res: any)=>{
        this.product= res;
      });
    }
  }
}

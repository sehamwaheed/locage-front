import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-CartPage',
  templateUrl: './CartPage.component.html',
  styleUrls: ['./CartPage.component.scss'],
})
export class CartPageComponent implements OnInit {
  logged = false;
  totalPrice?: number;

  loading = false;
  products = [];
  constructor(
    public cartService: CartService,
    private userServ: UserService,
    private route: Router
  ) {
    this.cartService.totalPrice.subscribe((value) => {
      this.totalPrice = value;
    });
  }

  ngOnInit(): void {
    this.userServ.loggedIn().subscribe((res) => {
      this.logged = res;
    });
    this.getProducts();
  }

  navigate() {
    this.route.navigate(['/home/checkout']);
  }

  deleteAllProducts() {
    if (this.logged) {
      this.cartService.removeAll().subscribe(() => {
        this.getProducts();
      });
    } else {
      this.cartService.removeAllLocal();
      this.getProducts();
    }
  }

  getProducts() {
    this.loading = true;
    if (this.logged) {
      // to add
      this.cartService.getProductFromRequest().subscribe((res) => {
        this.loading = false;

        this.products = res['result'];
      });
    } else {
      this.products = this.cartService.getProductsFromLocal();
      this.loading = false;
    }
  }
  update(product, quantity) {
    product.quantity = quantity;
    this.cartService.updateProduct(product);
    this.getProducts();
  }

  delete(id) {
    this.cartService.deleteProductFromReq(id).subscribe((res) => {
      this.getProducts();
    });
  }
}

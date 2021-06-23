import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-CartPage',
  templateUrl: './CartPage.component.html',
  styleUrls: ['./CartPage.component.scss']
})
export class CartPageComponent implements OnInit {

  logged = false;

  products = [];
  constructor(public cartService: CartService, private userServ:UserService, private route: Router) { }

 
  ngOnInit(): void {
  
    this.userServ.loggedIn().subscribe(res => {
      this.logged = res;
    })
    this.getProducts();
   
  }

  navigate(){

    if(this.logged){
      this.route.navigate(['/']);
    }else{
      this.route.navigate(['/login']);

    }
  }

  deleteAllProducts(){
    this.cartService.removeAll();
  }

  getProducts(){
    this.userServ.loggedIn().subscribe(res => {
      console.log(res);
      if(res){
         // to add
     this.cartService.getProductFromRequest().subscribe(res => {
      this.products= res['result']
    });
      }else{
        this.products=this.cartService.getProductsFromLocal();
      }
    })
    

  
  }
  update(product, quantity) {
    product.quantity = quantity;
    this.cartService.updateProduct(product);
   this.getProducts();

    console.log(this.products)
  }

  delete(id){
    this.cartService.deleteProduct(id);
    this.getProducts();

    console.log(id)
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideCartComponent } from './SharedComponent/Navbar/Navbar-Component/sideCart/sideCart.component';
import { SubNavbarComponent } from './SharedComponent/Navbar/Navbar-Component/sub-navbar/sub-navbar.component';
import { SearchComponent } from './SharedComponent/Navbar/Navbar-Component/search/search.component';
import { NavbarComponent } from './SharedComponent/Navbar/navbar/navbar.component';
 import { HomeComponent } from './HomePage/Home/Home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvComponent } from './HomePage/Adv/Adv.component';
import { ProductCardComponent } from './SharedComponent/Proudactcard/product-card/product-card.component';
import { BarRatingModule } from 'ngx-bar-rating';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SubNavbarComponent,
    SideCartComponent,
    AdvComponent,
    HomeComponent,
    ProductCardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

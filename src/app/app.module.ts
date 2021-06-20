import { ProductService } from './Services/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NgImageSliderModule } from 'ng-image-slider';

/*================================ My Components ==============================*/

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
import { ProductContainerComponent } from './HomePage/ProudactContainer/productContainer/productContainer.component';
import { CategoryComponent } from './HomePage/Categories/category/category.component';
import { TopCategoriesComponent } from './HomePage/Categories/top-categories/top-categories.component';
import { FooterComponent } from './SharedComponent/Footer/footer/footer.component';
import { ProudactCardVerticalComponent } from './SharedComponent/Proudactcard/proudact-card-vertical/proudact-card-vertical.component';
import { LayoutProductComponent } from './SharedComponent/proudact-layout-vertical/layout-product/layout-product.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtOptionsFactory } from './helpers/intercerptor/JwtOptions';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { UserService } from './Services/user.service';
import { LoginButtonComponent } from './SharedComponent/Navbar/Navbar-Component/login-button/login-button.component';
import { ProfileButtonComponent } from './SharedComponent/Navbar/Navbar-Component/profile-button/profile-button.component';
import { TopNavbarComponent } from './SharedComponent/Navbar/Navbar-Component/top-navbar/top-navbar.component';
import { LoginComponent } from './AuthPages/login/login.component';
import { RecoverComponent } from './AuthPages/recover/recover.component';
import { RegisterComponent } from './AuthPages/register/register.component';
import { ResetPasswordComponent } from './AuthPages/reset-password/reset-password.component';
import { CreateStoreComponent } from './Vendor/create-store/create-store.component';
import { StartSellingComponent } from './Vendor/start-selling/start-selling.component';
import { VendorService } from './Services/vendor.service';
import { NotFoundComponent } from './SharedComponent/not-found/not-found.component';
import { CategoryService } from './Services/category.service';
import { TruncatePipe } from './helpers/pipe/truncate.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { ImagePreviewComponent } from './product-view/image-preview/image-preview.component';
import { LocageComponent } from './locage/locage.component';

import { FilterationSidebarComponent } from './SharedComponent/filteration-sidebar/filteration-sidebar.component';
import { SubcategoryPageComponent } from './SubCategoryPage/subcategory-page/subcategory-page.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { SubCategoryInCtegoryComponent } from './sub-category-in-ctegory/sub-category-in-ctegory.component';
import { AboutUsComponent } from './AboutUsComponents/about-us/about-us.component';
import { OurVisionComponent } from './AboutUsComponents/our-vision/our-vision.component';
import { ContactsFormComponent } from './contactUsComponants/contacts-form/contacts-form.component';
import { ContactsComponent } from './contactUsComponants/contacts/contacts.component';
import { AccountDetailsComponent } from './ProfileComponents/account-details/account-details.component';
import { AccountOverviewComponent } from './ProfileComponents/account-overview/account-overview.component';
import { AddNewAddressComponent } from './ProfileComponents/add-new-address/add-new-address.component';
import { AddressBookDetailsComponent } from './ProfileComponents/address-book-details/address-book-details.component';
import { AddressBookComponent } from './ProfileComponents/address-book/address-book.component';
import { ChangePasswordComponent } from './ProfileComponents/change-password/change-password.component';
import { DetailsComponent } from './ProfileComponents/details/details.component';
import { NotDefaultAddressComponent } from './ProfileComponents/not-default-address/not-default-address.component';
import { ProfileComponent } from './ProfileComponents/profile/profile.component';
import { WishListComponent } from './ProfileComponents/wish-list/wish-list.component';
import { UnderDevelopmentComponent } from './SharedComponent/under-development/under-development.component';
import { ShipmentService } from './Services/shipment.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LocageTodayComponent } from './AboutUsComponents/locage-today/locage-today.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartPageComponent } from './cart/CartPage/CartPage.component';

@NgModule({
  declarations:[

    AppComponent,
    NavbarComponent,
    SearchComponent,
    SubNavbarComponent,
    SideCartComponent,
    AdvComponent,
    HomeComponent,
    ProductCardComponent,
    ProductContainerComponent,
    CategoryComponent,
    TopCategoriesComponent,
    FooterComponent,
    ProudactCardVerticalComponent,
    LayoutProductComponent,
    LoginButtonComponent,
    ProfileButtonComponent,
    TopNavbarComponent,
    LoginComponent,
    RecoverComponent,
    CreateStoreComponent,
    StartSellingComponent,
    NotFoundComponent,
    TruncatePipe,
    ResetPasswordComponent,
    RegisterComponent,
    FilterationSidebarComponent,
    SubcategoryPageComponent,
    ProductViewComponent,
    ImagePreviewComponent,
    SubCategoryInCtegoryComponent,
    AboutUsComponent,
    OurVisionComponent,
    ContactsComponent,
    ContactsFormComponent,
    ProfileComponent,
    AccountDetailsComponent,
    AddressBookComponent,
    AccountOverviewComponent,
    ChangePasswordComponent,
    AddressBookDetailsComponent,
    DetailsComponent,
    NotDefaultAddressComponent,
    AddNewAddressComponent,
    WishListComponent,
    UnderDevelopmentComponent,
    LocageComponent,
    AboutUsComponent,
    LocageTodayComponent,
    CartComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,

    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
    NgxWebstorageModule.forRoot({
      prefix: '',
      separator: '',
      caseSensitive: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BarRatingModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
    NgImageSliderModule,
     NgxImageZoomModule

  ],
  providers: [
    FormBuilder,
    UserService,
    AuthGuardService,
    VendorService,
    ProductService,
    CategoryService,

    ShipmentService,
  ],
  bootstrap: [AppComponent],
  exports: [TruncatePipe],
})
export class AppModule {}

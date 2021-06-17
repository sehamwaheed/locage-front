import { NotFoundComponent } from './SharedComponent/not-found/not-found.component';
import { HomeComponent } from './HomePage/Home/Home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AuthPages/login/login.component';
import { RecoverComponent } from './AuthPages/recover/recover.component';
import { RegisterComponent } from './AuthPages/register/register.component';
import { ResetPasswordComponent } from './AuthPages/reset-password/reset-password.component';
import { CreateStoreComponent } from './Vendor/create-store/create-store.component';
import { StartSellingComponent } from './Vendor/start-selling/start-selling.component';
import { LocageComponent } from './locage/locage.component';
import { SubcategoryPageComponent } from './SubCategoryPage/subcategory-page/subcategory-page.component';

const routes: Routes = [
  //primar router-outlet all pages
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:LocageComponent ,children:[
    //nested router-outlet
    { path: '', component: HomeComponent },
    {path:'subcategory/:id',component : SubcategoryPageComponent}

  ]},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'recover/:token', component: RecoverComponent },
  { path: 'start-selling', component: StartSellingComponent },
  { path: 'create-store', component: CreateStoreComponent },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

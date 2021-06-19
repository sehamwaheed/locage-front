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
import { AuthGuardService } from './Services/auth-guard.service';
import { ChangePasswordComponent } from './ProfileComponents/change-password/change-password.component';
import { ProfileComponent } from './ProfileComponents/profile/profile.component';
import { DetailsComponent } from './ProfileComponents/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'recover/:token', component: RecoverComponent },
  { path: 'start-selling', component: StartSellingComponent },
  {
    path: 'create-store',
    component: CreateStoreComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/update-account',
    component: DetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/update-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

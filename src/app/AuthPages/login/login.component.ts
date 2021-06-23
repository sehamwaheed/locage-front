import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  buttonSubmit: boolean = false;
  errorMsg: string;
  eMsg: string;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private userService: UserService, private router: Router, private Carteservice: CartService) {}

  ngOnInit(): void {
    this.userService.loggedIn().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit(body: any) {
    this.buttonSubmit = true;
    this.userService.login(body).subscribe(
      (result: any) => {
        this.invalidLogin = false;
        localStorage.setItem('access_token', result.token);
        this.userService.getToken()?.toString();
        this.router.navigate(['/']);
        this.Carteservice.uploadProductsToServer();
      },
      (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'USER_NOT_FOUND') {
          this.errorMsg = `${body.email} is not registered`;
          this.invalidLogin = true;
        } else if (this.eMsg == 'WRONG_PASSWORD') {
          this.errorMsg = `check your password and try again`;
          this.invalidLogin = true;
        }
        this.buttonSubmit = false;
      }
    );
  }
}

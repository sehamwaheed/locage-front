import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  invalidRegister: Boolean = false;
  buttonSubmit: Boolean = false;
  errorMsg: string;
  eMsg: string;
  registerForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.loggedIn().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  checkEmail(body: any) {
    this.userService.checkEmail(body).subscribe(
      () => {
        this.invalidRegister = false;
      },
      (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'EMAIL_ALREADY_REGISTER') {
          this.errorMsg = `${body.email} is already registered`;
          this.invalidRegister = true;
        }
      }
    );
  }

  onSubmit(body: any) {
    this.buttonSubmit = true;
    this.userService.register(body).subscribe(
      (result: any) => {
        this.invalidRegister = false;
        localStorage.setItem('access_token', result.token);
        this.userService.getToken()?.toString();
        this.router.navigate(['/']);
      },
      (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'EMAIL_ALREADY_REGISTER') {
          this.errorMsg = `${body.email} is already registered`;
          this.invalidRegister = true;
        }
        this.buttonSubmit = false;
      }
    );
  }
}

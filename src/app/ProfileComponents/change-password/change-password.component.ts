import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  buttonSubmit: boolean = false;
  invalidUpdate: boolean = false;
  successUpdate: boolean = false;
  eMsg: string;
  errorMsg: string;
  successMsg: string;
  changePassForm = new FormGroup({
    currentPassword: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirmPassword: new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get currentPassword() {
    return this.changePassForm.get('currentPassword');
  }
  get password() {
    return this.changePassForm.get('password');
  }
  get confirmPassword() {
    return this.changePassForm.get('confirmPassword');
  }

  onSubmit(body: any) {
    this.successUpdate = false;
    this.invalidUpdate = false;
    this.buttonSubmit = true;

    this.userService.updatePassword(body).subscribe(
      (result: any) => {
        if (result.message == 'PASSWORD_UPDATED') {
          this.successUpdate = true;
          this.successMsg = 'Password updated successfully';
        }
        this.buttonSubmit = false;
      },
      (error: any) => {
        this.invalidUpdate = true;
        this.eMsg = error.message;
        if (this.eMsg == 'BAD_REQUEST') {
          this.errorMsg = 'Something went wrong';
        } else if (this.eMsg == 'UNAUTHORIZED') {
          this.errorMsg = 'Something went wrong , try sign out and login again';
        } else if (this.eMsg == 'WRONG_PASSWORD') {
          this.errorMsg = 'Current Password is incorrect';
        }
      }
    );
  }
}

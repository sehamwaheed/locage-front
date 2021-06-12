import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  invalidReset: boolean = false;
  successReset: boolean = false;
  buttonSubmit: boolean = false;
  errorMsg: string;
  eMsg: string;
  emailAddress: string;

  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  get email() {
    return this.resetForm.get('email');
  }
  onSubmit(body: any) {
    this.buttonSubmit = true;
    this.userService.resetPassword(body).subscribe(
      (result: any) => {
        if (result.message == 'RESET_EMAIL_SENT') {
          this.emailAddress = result.email;
          this.successReset = true;
        }
      },
      (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'USER_NOT_FOUND') {
          this.errorMsg = `${body.email} is not registered`;
          this.invalidReset = true;
        }
        this.buttonSubmit = false;
      }
    );
  }
}

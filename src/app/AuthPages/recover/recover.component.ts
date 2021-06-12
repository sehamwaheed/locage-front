import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent implements OnInit {
  invalidReset: boolean = false;
  buttonSubmit: boolean = false;
  successReset: boolean = false;
  errorMsg: string;
  eMsg: string;
  token: string;

  recoverForm = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  get password() {
    return this.recoverForm.get('password');
  }
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') ?? '';
  }

  onSubmit(body: any) {
    this.buttonSubmit = true;
    this.userService.recoverPassword(body, this.token).subscribe(
      (result: any) => {
        if (result.message == 'PASSWORD_CHANGED') {
          this.successReset = true;
        }
      },
      (e) => {
        this.eMsg = e.error.message;
        if (this.eMsg == 'PASSWORD_RESET_TOKEN_INVALID_OR_EXPIRED') {
          this.errorMsg = `Reset Token is invalid or expired, Request new one `;
          this.invalidReset = true;
        }
        this.buttonSubmit = false;
      }
    );
  }
}

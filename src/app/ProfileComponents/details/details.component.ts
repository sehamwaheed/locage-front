import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentUser?: UserModel;
  date = new Date();
  buttonSubmit: boolean = false;
  invalidUpdate: boolean = false;
  successUpdate: boolean = false;
  errorMsg: string;
  successMsg: string;
  eMsg: string;
  detailsForm: FormGroup;
  constructor(private userService: UserService) {
    userService.returnUserDetails().subscribe((user: UserModel) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      firstName: new FormControl(this.currentUser.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      lastName: new FormControl(this.currentUser.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      email: new FormControl(
        { value: this.currentUser.email, disabled: true },
        [Validators.required, Validators.email]
      ),
      phoneNumber: new FormControl(
        this.currentUser.phoneNumber,
        Validators.required
      ),
      gender: new FormControl(this.currentUser.gender ?? null),
      dob: new FormControl(Date.parse(this.currentUser.dob), [
        Validators.required,
      ]),
    });
  }
  get firstName() {
    return this.detailsForm.get('firstName');
  }
  get lastName() {
    return this.detailsForm.get('lastName');
  }
  get email() {
    return this.detailsForm.get('email');
  }
  get phoneNumber() {
    return this.detailsForm.get('phoneNumber');
  }
  get gender() {
    return this.detailsForm.get('gender');
  }
  get dob() {
    return this.detailsForm.get('dob');
  }

  onSubmit(body: any) {
    this.successUpdate = false;
    this.invalidUpdate = false;
    this.buttonSubmit = true;

    this.userService.updateAccount(body).subscribe(
      (result: any) => {
        if (result.message == 'ACCOUNT_UPDATED') {
          this.successUpdate = true;
          this.successMsg = 'Account updated successfully';
          this.userService.currentUserDetails();
        }
        this.buttonSubmit = false;
      },
      (e: any) => {
        this.invalidUpdate = true;
        this.eMsg = e.error.message;
        if (this.eMsg == 'BAD_REQUEST') {
          this.errorMsg = 'Something went wrong';
        } else if (this.eMsg == 'UNAUTHORIZED') {
          this.errorMsg = 'Something went wrong , try sign out and login again';
        } else if (this.eMsg == 'EMAIL_ALREADY_REGISTER') {
          this.errorMsg = 'Email Already Registered';
        } else if (this.eMsg == 'NOTHING_CHANGED') {
          this.errorMsg = 'Nothing Updated';
        }
      }
    );
  }
}

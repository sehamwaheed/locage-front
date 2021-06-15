import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  imagePreview: string;
  buttonSubmit: boolean = false;
  invalidSubmit: boolean = false;
  userCreatedApplication!: boolean;
  isVendor!: boolean;
  errorMsg: string;
  eMsg: string;
  photo!: File;
  createStoreForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    zipCode: new FormControl(null, [Validators.required]),
  });

  constructor(
    private vendorService: VendorService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendorService.getStoreByUserId().subscribe(
      (result) => {
        if (result) {
          this.userCreatedApplication = true;
          if (this.userService.currentUser.role == 'vendor') {
            this.isVendor = true;
          } else {
            this.isVendor = false;
          }
        }
      },
      (err) => {
        this.eMsg = err.message;
        if (this.eMsg == 'NOT_FOUND') {
          this.userCreatedApplication = false;
          this.isVendor = false;
        }
      }
    );
  }

  get name() {
    return this.createStoreForm.get('name');
  }
  get email() {
    return this.createStoreForm.get('email');
  }
  get phoneNumber() {
    return this.createStoreForm.get('phoneNumber');
  }
  get city() {
    return this.createStoreForm.get('city');
  }
  get state() {
    return this.createStoreForm.get('state');
  }
  get country() {
    return this.createStoreForm.get('country');
  }
  get zipCode() {
    return this.createStoreForm.get('zipCode');
  }

  onSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.photo = file;
    }
  }

  onSubmit(body: any) {
    this.invalidSubmit = false;
    this.buttonSubmit = true;
    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('photo', this.photo);
    formData.append('address.city', body.city);
    formData.append('address.state', body.state);
    formData.append('address.country', body.country);
    formData.append('address.zipCode', body.zipCode);
    this.vendorService.createStore(formData).subscribe(() => {
      this.userCreatedApplication = true;
    }),
      (err) => {
        this.invalidSubmit = true;
        this.eMsg = err.message;
        if (this.eMsg == 'CANT_CREATE_NEW_STORE') {
          this.errorMsg =
            'You have already applied for application, Wait for admin to review your application or contact support';
        } else if (this.eMsg == 'UNAUTHORIZED') {
          this.errorMsg = 'you must login first with your user account';
        }
        this.buttonSubmit = false;
      };
  }
}

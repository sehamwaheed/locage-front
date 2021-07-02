import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  currentUser?: UserModel;
  imagePreview: string;
  buttonSubmit: boolean = false;
  invalidSubmit: boolean = false;
  userCreatedApplication!: boolean;
  isVendor!: boolean;
  errorMsg: string;
  eMsg: string;
  photo!: File;
  createStoreForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [
      Validators.required, 
      Validators.minLength(2) ,
     ]),

    phoneNumber: new FormControl(null, [
      Validators.required,

      Validators.minLength(11),
      Validators.pattern("^[\+]?[(]?[0-9]{10}"),
    ]),
    zipCode: new FormControl(null, 
      [Validators.required ,
        Validators.minLength(5),

         Validators.pattern("^[0-9]*$"),]),

    city: new FormControl(null, [Validators.required, Validators.minLength(3) ]),
    state: new FormControl(null, [Validators.required , Validators.minLength(3)]),
    country: new FormControl(null, [Validators.required , Validators.minLength(3)]),
  });

  constructor(
    private vendorService: VendorService,
    private userService: UserService
  ) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.vendorService.getStoreByUserId().subscribe(
      (result) => {
        if (result) {
          this.userCreatedApplication = true;
          if (this.currentUser.role == 'vendor') {
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
    formData.append('phoneNumber', body.phoneNumber);
    formData.append('address.city', body.city);
    formData.append('phoneNumber', body.phoneNumber);
    
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

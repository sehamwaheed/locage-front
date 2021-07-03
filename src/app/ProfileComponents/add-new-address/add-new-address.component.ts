import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipmentModel } from 'src/app/Models/shipmentModel';
import { ShipmentService } from 'src/app/Services/shipment.service';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss'],
})
export class AddNewAddressComponent implements OnInit {
  addAddressForm: FormGroup;
  buttonSubmit: boolean = false;
  invalidAddress: boolean = false;
  eMsg: string;
  errorMsg: string;
  shipment?: ShipmentModel;
  constructor(
    private shipmentService: ShipmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shipment = history.state.data;

    this.addAddressForm = new FormGroup({
      firstName: new FormControl(
        this.shipment?.firstName ?? null,
        Validators.required
      ),
      lastName: new FormControl(
        this.shipment?.lastName ?? null,
        Validators.required
      ),
      phoneNumber: new FormControl(
        this.shipment?.phoneNumber ?? null,
        Validators.required
      ),
      address: new FormControl(
        this.shipment?.address ?? null,
        Validators.required
      ),
      city: new FormControl(this.shipment?.city ?? null, Validators.required),
      country: new FormControl(
        this.shipment?.country ?? null,
        Validators.required
      ),
      setDefault: new FormControl(this.shipment?.primary ?? false),
    });
  }

  onSubmit(body: any) {
    this.invalidAddress = false;
    this.buttonSubmit = true;
    body.primary = body.setDefault ?? false;

    if (!this.shipment) {
      this.shipmentService.createAddress(body).subscribe(
        () => {
          this.router.navigate(['home/profile/address']);
        },
        (error) => {
          this.buttonSubmit = false;
          this.invalidAddress = true;
          this.eMsg = error.message;
          if (this.eMsg == 'BAD_REQUEST') {
            this.errorMsg = 'Something went wrong';
          } else if (this.eMsg == 'UNAUTHORIZED') {
            this.errorMsg =
              'Something went wrong , try sign out and login again';
          }
        }
      );
    } else {
      this.shipmentService.updateAddress(body, this.shipment._id).subscribe(
        () => {
          this.router.navigate(['home/profile/address']);
        },
        (e: any) => {
          this.buttonSubmit = false;
          this.invalidAddress = true;
          this.eMsg = e.error.message;
          if (this.eMsg == 'BAD_REQUEST') {
            this.errorMsg = 'Something went wrong';
          } else if (this.eMsg == 'UNAUTHORIZED') {
            this.errorMsg =
              'Something went wrong , try sign out and login again';
          }
        }
      );
    }
  }
}

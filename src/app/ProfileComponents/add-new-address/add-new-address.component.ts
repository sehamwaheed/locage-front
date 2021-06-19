import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() opened: string;
  @Output() notify = new EventEmitter<string>();

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.addAddressForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      setDefault: new FormControl(null),
    });
  }

  onSubmit(body: any) {
    this.invalidAddress = false;
    this.buttonSubmit = true;
    var form = {
      fullName: `${body.firstName} ${body.lastName}`,
      address: `${body.address} , ${body.city} , ${body.country}`,
      phoneNumber: body.phoneNumber,
      primary: body.setDefault,
    };

    this.shipmentService.createAddress(form).subscribe(
      () => {
        this.opened = 'addressDetails';
        this.notify.emit(this.opened);
      },
      (error) => {
        this.buttonSubmit = false;
        this.invalidAddress = true;
        this.eMsg = error.message;
        if (this.eMsg == 'BAD_REQUEST') {
          this.errorMsg = 'Something went wrong';
        } else if (this.eMsg == 'UNAUTHORIZED') {
          this.errorMsg = 'Something went wrong , try sign out and login again';
        }
      }
    );
  }
}

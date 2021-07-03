import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentModel } from 'src/app/Models/shipmentModel';
import { ShipmentService } from 'src/app/Services/shipment.service';

@Component({
  selector: 'app-not-default-address',
  templateUrl: './not-default-address.component.html',
  styleUrls: ['./not-default-address.component.scss'],
})
export class NotDefaultAddressComponent implements OnInit {
  @Input() shipment: ShipmentModel;
  @Output() notify = new EventEmitter<string>();
  @Output() makeDefaultAddress = new EventEmitter<string>();
  constructor(
    private shipmentService: ShipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  deleteShipment() {
    this.shipmentService.deleteShipment(this.shipment._id).subscribe(
      () => {
        this.notify.emit(this.shipment._id);
      },
      (err) => {}
    );
  }

  setAsPrimary() {
    var body = { primary: true };
    this.shipmentService.updateAddress(body, this.shipment._id).subscribe(
      () => {
        this.shipment.primary = true;
        this.makeDefaultAddress.emit(this.shipment._id);
      },
      (error) => {}
    );
  }
  editShipment() {
    this.router.navigate(['home/profile/update-address'], {
      state: { data: this.shipment },
    });
  }
}

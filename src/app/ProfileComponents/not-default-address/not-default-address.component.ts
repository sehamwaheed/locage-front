import { Component, Input, OnInit } from '@angular/core';
import { ShipmentModel } from 'src/app/Models/shipmentModel';
import { ShipmentService } from 'src/app/Services/shipment.service';

@Component({
  selector: 'app-not-default-address',
  templateUrl: './not-default-address.component.html',
  styleUrls: ['./not-default-address.component.scss'],
})
export class NotDefaultAddressComponent implements OnInit {
  @Input() shipment: ShipmentModel;
  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {}
  deleteShipment() {
    this.shipmentService.deleteShipment(this.shipment._id).subscribe(
      () => {
        this.shipment = null;
      },
      (err) => {}
    );
  }
  setAsPrimary() {
    var body = { primary: true };
    this.shipmentService.updateAddress(body, this.shipment._id).subscribe(
      () => {
        this.shipment.primary = true;
      },
      (error) => {}
    );
  }
}

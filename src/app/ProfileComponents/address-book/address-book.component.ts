import { Component, OnInit } from '@angular/core';
import { ShipmentModel } from 'src/app/Models/shipmentModel';
import { ShipmentService } from 'src/app/Services/shipment.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  defaultShipment?: ShipmentModel;
  constructor(private shipmentService: ShipmentService) {
    this.shipmentService.getPrimary().subscribe((result: any) => {
      this.defaultShipment = result.result;
    });
  }

  ngOnInit(): void {}

  onChangeAddressClick() {}
}

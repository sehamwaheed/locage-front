import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShipmentModel } from 'src/app/Models/shipmentModel';
import { ShipmentService } from 'src/app/Services/shipment.service';

@Component({
  selector: 'app-address-book-details',
  templateUrl: './address-book-details.component.html',
  styleUrls: ['./address-book-details.component.scss'],
})
export class AddressBookDetailsComponent implements OnInit {
  shipments?: ShipmentModel[];
  @Input() opened: string;
  @Output() notify = new EventEmitter<string>();
  constructor(private shipmentService: ShipmentService) {
    this.shipmentService.getShipments().subscribe((result: any) => {
      this.shipments = result.result;
    });
  }
  onAddNewClick() {
    this.opened = 'addNewAddress';
    this.notify.emit(this.opened);
  }
  ngOnInit(): void {}
}

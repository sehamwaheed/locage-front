import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  opened?: string;
  constructor() {
    this.opened = 'accountOverview';
  }

  ngOnInit(): void {}

  getOpenedValue(opened: string) {
    this.opened = opened;
  }

  openUnderDevelopment() {
    this.opened = 'underDevelopment';
  }
  openAccountDetails() {
    this.opened = 'accountDetails';
  }
  openAccountOverview() {
    this.opened = 'accountOverview';
  }
  openChangePassword() {
    this.opened = 'changePassword';
  }
  openAddressDetails() {
    this.opened = 'addressDetails';
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
})
export class AccountOverviewComponent implements OnInit {
  @Input() opened: string;
  @Output() notify = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  getOpenedValue(opened: string) {
    this.opened = opened;
    this.notify.emit(this.opened);
  }
}

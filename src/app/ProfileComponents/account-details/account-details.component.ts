import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  user?: UserModel;
  @Input() opened: string;
  @Output() notify = new EventEmitter<string>();
  constructor(private userService: UserService) {
    this.userService.returnUserDetails().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}

  onChangePassClick() {
    this.opened = 'changePassword';
    this.notify.emit(this.opened);
  }

  onAccountDetailsClick() {
    this.opened = 'accountDetails';
    this.notify.emit(this.opened);
  }
}

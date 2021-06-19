import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  contactUsForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      'fullName': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'subject': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

}

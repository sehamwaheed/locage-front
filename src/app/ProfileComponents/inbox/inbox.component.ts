import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  isLoding: boolean = true;
  isempty: boolean = true;
  constructor() { }

  ngOnInit(): void {

    this.isLoding=false;
  }

}

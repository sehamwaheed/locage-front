import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locage-credit',
  templateUrl: './locage-credit.component.html',
  styleUrls: ['./locage-credit.component.scss']
})
export class LocageCreditComponent implements OnInit {
  isLoding: boolean = true;
  isempty: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.isLoding=false;
  }

}

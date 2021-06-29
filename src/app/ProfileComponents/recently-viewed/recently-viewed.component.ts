import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {


  isLoding: boolean = true;
  isempty: boolean = true;
  constructor() { }

  ngOnInit(): void {

    this.isLoding=false;
  }

}

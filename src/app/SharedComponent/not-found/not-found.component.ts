import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  item?: any;

  constructor() {}

  ngOnInit(): void {
    this.item = this.randomNumber(0, 1); //true of false
  }
  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

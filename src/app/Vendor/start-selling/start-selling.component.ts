import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './start-selling.component.html',
  styleUrls: ['./start-selling.component.scss'],
})
export class StartSellingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/create-store']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {
  isTrue?: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {
    var status = this.route.snapshot.paramMap.get('status');
    if (status == 'ok') {
      this.isTrue = true;
    } else {
      this.isTrue = false;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 5000);
  }
}

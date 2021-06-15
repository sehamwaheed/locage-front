import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filteration-sidebar',
  templateUrl: './filteration-sidebar.component.html',
  styleUrls: ['./filteration-sidebar.component.scss']
})
export class FilterationSidebarComponent implements OnInit {

  toppings: FormGroup;
  formbrand:FormGroup;
  brands:string[]=["red","ali","mai","zolo","dina"];


  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }

  ngOnInit(): void {
  }

  rating: number;
  ratings: number[] = [1, 2, 3, 4,5];

}

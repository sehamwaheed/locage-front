import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(data:NgModel){
    if(data.value.trim() === '' || data.invalid){
       return;
    }

    this.router.navigate(['/home/subcategory'], { queryParams: { key: data.value.trim() } });

  }
}

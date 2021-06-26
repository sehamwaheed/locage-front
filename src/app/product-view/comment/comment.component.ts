import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input('name') name = '';
  @Input('date') date='';
  @Input('comment') comment='';
  constructor() { }

  ngOnInit(): void {




  }

  getTimeFromNow(date) {
    return moment(date).fromNow();
  }


  genrateChar(name: string): string {
    return name?.charAt(0).toUpperCase();
  }

  nameToCaptial(name: string): string {
    return name?.charAt(0).toUpperCase() + name.slice(1);
  }
}

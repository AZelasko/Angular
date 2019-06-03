import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Comment} from './../comment';


@Component({

  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})

export class CommentComponentComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
@Input ('komentarz')  comment: Comment;

  constructor() {

  }

  ngOnInit() {
  }

}

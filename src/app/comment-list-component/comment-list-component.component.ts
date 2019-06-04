import { Component, OnInit } from '@angular/core';
import { Comment } from './../comment';


@Component({
  selector: 'app-comment-list-component',
  templateUrl: './comment-list-component.component.html',
  styleUrls: ['./comment-list-component.component.css']
})

export class CommentListComponentComponent implements OnInit {

  comments: Array <Comment>;

  constructor() {
    this.comments = [
      new Comment('Agnieszka', 'Pierwszy komentarz'),
      new Comment('Daria', 'Drugi komentarz'),
      new Comment('Frania', 'Trzeci komentarz'),
    ];
  }


  ngOnInit() {
  }

  dodajComment(param) {
    this.comments.unshift(param);
  }
}

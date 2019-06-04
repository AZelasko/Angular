import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Comment} from './../comment';
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  @Output() commentCreated = new EventEmitter<Comment>();
  constructor() { }

  ngOnInit() {
  }

  AddComment(imie: string, komentarz: string) {
    this.commentCreated.emit(new Comment(imie, komentarz));
  }

}

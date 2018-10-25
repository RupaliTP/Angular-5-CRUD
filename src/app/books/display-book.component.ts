import { Component, OnInit, Input } from '@angular/core';
import { Books } from '../models/books.model';
import { Router } from '@angular/router';
import { BooksService } from './books.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  @Input()
  book: Books;
  
  constructor(private _route : Router,
              private _bookService : BooksService) { }

  ngOnInit() {
  }

  onViewButtonClick(bookId: number){
    this._route.navigate(['/books',this.book.bookId]);
  }

  onEditButtonClick(bookId: number){
    this._route.navigate(['/edit',this.book.bookId]);
  }
  onDeleteButtonClick(){
    this._bookService.onDeleteButtonClick(this.book.bookId);
  }
  
} 
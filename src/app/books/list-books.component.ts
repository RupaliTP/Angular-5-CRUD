import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model'
import { BooksService } from './books.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: Books[];
  
  constructor(private _booksService: BooksService,
              private _route: Router) { }

  ngOnInit() {
    this.books = this._booksService.getBooks();
  }
  onClick(bookId: number){
    this._route.navigate(['/books',bookId]);
  }
  
}

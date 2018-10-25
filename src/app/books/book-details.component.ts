import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from './books.service';
import { Books } from '../models/books.model';
 
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input()
  book: Books;
  
  constructor(private _activatedRoute : ActivatedRoute,
              private _bookService : BooksService,
             private _route : Router) { }

  ngOnInit() {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.book = this._bookService.getBookDetails(id);
  }
  

}

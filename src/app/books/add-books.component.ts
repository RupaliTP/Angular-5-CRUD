import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';
import { Books } from '../models/books.model'
import { BooksService } from './books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  panelTitle:string;
  @ViewChild('booksForm') public addBookForm: NgForm;


  priviewPhoto = false;

  datePickerConfig: Partial<BsDatepickerConfig>;

  books: Books;

  constructor(private _booksSerivce: BooksService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'YYYY',
      }
    );
  }

  toggelPreviewPhoto() {
    this.priviewPhoto = !this.priviewPhoto;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getBooks(id);
    });
  }

  private getBooks(id: number) {
    if (id === 0) {
      this.books = {
        bookId: null,
        bookName: null,
        bookAuthor: null,
        publishDate: null,
        publisher: null,
        country: null,
        language: null,
        subject: null,
        coverPhoto: null,
      }
      this.panelTitle = 'Add Book';
      this.addBookForm.reset();
    }
    else {
      this.panelTitle = 'Edit Book';
      this.books = Object.assign({}, this._booksSerivce.getBookDetails(id));
    }
  }

  saveBooks(): void {
    this._booksSerivce.save(this.books);
    this._router.navigate(['list']);
  }

}

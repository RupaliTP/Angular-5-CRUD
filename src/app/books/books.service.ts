import { Injectable } from '@angular/core';
import { Books } from '../models/books.model';

@Injectable()
export class BooksService {
    private listOfBooks: Books[] = [
        {
            bookId: 1,
            bookName: "War and Peace",
            bookAuthor: "Leo Tolstoy",
            publishDate: 1869,
            publisher: "The Russian Messenger (serial)",
            country: "Russia",
            language: "Russian, with some French",
            subject: "Historical Novel",
            coverPhoto: "/assets/images/War-and-Peace.jpg",
        },
        {
            bookId: 2,
            bookName: "A Brief History of Time",
            bookAuthor: "Stephen Hawking",
            publishDate: 1888,
            publisher: "Bantam Dell Publishing Group",
            country: "United Kingdom",
            language: "English",
            subject: "Cosmology",
            coverPhoto: "assets/images/Brief-history-of-time.jpg",
        },
        {
            bookId: 3,
            bookName: "The Shadow Lines",
            bookAuthor: "Amitav Ghosh",
            publishDate: 1888,
            publisher: "Ravi Dayal Publishers",
            country: "India",
            language: "English",
            subject: "Historical Events",
            coverPhoto: "/assets/images/The_Shadow-lines.jpg",
        },
        {
            bookId: 4,
            bookName: "Wings of Fire",
            bookAuthor: ":APJ abdul kalam",
            publishDate: 1999,
            publisher: "Universities Press",
            country: "India",
            language: "English",
            subject: "India journey to self-reliance in technology",
            coverPhoto: "/assets/images/wings-of-fire.jpg",
        }
    ];

    getBooks(): Books[] {
        return this.listOfBooks;
    }

    getBookDetails(bookID: number): Books {
        return this.listOfBooks.find(e => e.bookId === bookID);
    }

    save(book: Books) {
        if (book.bookId === null) {
            const maxId = this.listOfBooks.reduce(function (e1, e2) {
                return (e1.bookId > e2.bookId) ? e1 : e2;
            }).bookId;
            book.bookId = maxId + 1;
            this.listOfBooks.push(book);
        }
        else {
            const foundIndex = this.listOfBooks.findIndex(e => e.bookId === book.bookId);
            this.listOfBooks[foundIndex] = book;
        }
    }

    onDeleteButtonClick(id : number){
        const i = this.listOfBooks.findIndex(e => e.bookId === id);
        if(i !== -1){
            this.listOfBooks.splice(i,1);
        }
    }
}
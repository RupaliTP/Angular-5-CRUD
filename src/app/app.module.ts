import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListBooksComponent } from './books/list-books.component';
import { AddBooksComponent } from './books/add-books.component';
import { BooksService }  from './books/books.service';
import { DisplayBookComponent } from './books/display-book.component';
import { AddBookCanDeactivateGuardService } from './books/add-book-can-deactivate-guard.service';
import { BookDetailsComponent } from './books/book-details.component';

const appRoutes : Routes = [
   { path: 'list', component: ListBooksComponent},
   { 
     path: 'edit/:id', 
     component: AddBooksComponent,
     canActivateChild: [AddBookCanDeactivateGuardService],
    },
    { path: 'books/:id', component: BookDetailsComponent},
    { path: '', redirectTo: '/list', pathMatch: 'full'}
]; 

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    AddBooksComponent,
    DisplayBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
  ],
  providers: [BooksService,AddBookCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import{ AddBooksComponent  } from './add-books.component';

@Injectable()
export class AddBookCanDeactivateGuardService implements CanDeactivate<AddBooksComponent>
{
    canDeactivate(component : AddBooksComponent) : boolean{
        if(component.addBookForm.dirty) {
            return confirm('Are you sure want to discard your changes.?');
        }
        return true;
    }
}
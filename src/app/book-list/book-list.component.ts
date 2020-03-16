import { Component, OnInit, OnDestroy } from '@angular/core';

import { Books } from '../model/books.model';
import { BooksSearchService } from '../services/books-search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit, OnDestroy {

    books: Books[];
    subscription: Subscription;

    constructor(private booksSearchService: BooksSearchService) {}

    ngOnInit() {
       this.subscription = this.booksSearchService.booksChanged.subscribe(
           books => {
               this.books = books;
           }
       );
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
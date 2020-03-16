import { Component } from '@angular/core';

import { BooksSearchService } from '../services/books-search.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    constructor(private booksSearchService: BooksSearchService) {}

    onInput(searchQuery: string) {
        this.booksSearchService.searchBooks(searchQuery);
    }

}
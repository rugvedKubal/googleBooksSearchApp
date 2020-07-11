import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BooksSearchService } from '../services/books-search.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private booksSearchService: BooksSearchService, private router: Router) {}

    onInput(searchQuery: string) {

        //navigate back to Header component to see search results
        this.router.navigate(['/']);

        //check if the search query is not empty
        if(searchQuery.trim() !== "") {
            this.booksSearchService.searchBooks(searchQuery);
        }
    }

}
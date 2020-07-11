import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BooksSearchService } from '../services/books-search.service';
import { Books } from '../model/books.model';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Books;

    constructor(private route: ActivatedRoute, private bookSerachService: BooksSearchService) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.book = this.bookSerachService.books[params['id']];
            }
        );
    }

}
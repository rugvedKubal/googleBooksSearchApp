import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
 
import { BooksData } from '../model/books-data.model';
import { Books } from '../model/books.model';


@Injectable({providedIn: 'root'})
export class BooksSearchService {

    books: Books[];
    booksChanged = new Subject<Books[]>()

    constructor(private http: HttpClient) {}

    searchBooks(searchQuery: string) {
        this.http.get<BooksData>('https://www.googleapis.com/books/v1/volumes', {params: new HttpParams().set('q', searchQuery)})
        .subscribe(
            response => {
                this.books = response.items;
                this.booksChanged.next(this.books.slice());
            }
        );
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BooksData } from '../model/books-data.model';


@Injectable({providedIn: 'root'})
export class BooksSearchService {

    constructor(private http: HttpClient) {}

    getBooks(searchQuery: string) {
        return this.http.get<BooksData>('https://www.googleapis.com/books/v1/volumes', {params: new HttpParams().set('q', searchQuery)});
    }
}
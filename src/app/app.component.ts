import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { BooksSearchService } from './services/books-search.service';
import { Books } from './model/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private booksSearchService: BooksSearchService) {}

  books: Books[];

  onInput(searchQuery) {
    //console.log(searchQuery);
    this.booksSearchService.getBooks(searchQuery)
    .subscribe(
      response => {
          this.books = response.items;
          // for(let i=0; i<this.books.length; i++) {
          //   console.log(this.books[i]);
          // }
      }
    );
  }

  // onSubmit(searchQuery) {
  //   const searchQuery: string = f.form.value.search;
  //   this.booksSearchService.getBooks(searchQuery)
  //   .subscribe(
  //     response => {
  //         this.books = response.items;
  //         for(let i=0; i<this.books.length; i++) {
  //           console.log(this.books[i]);
  //         }
  //     }
  //   );
  // }

}

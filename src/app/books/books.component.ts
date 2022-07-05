import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book';
import { BooksService } from '../serves/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Book[] = [];
  constructor(private bookServe: BooksService) { }

  ngOnInit(): void {
    this.books = this.bookServe.books;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CartServeService } from '../cart/cart-serve.service';
import { Book } from '../interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() itemBook?: Book;
  public isAdd: boolean = true;
  constructor(private cartServe: CartServeService) { }

  ngOnInit(): void {
  }
  public addCart() {
    this.cartServe.addCart(this.itemBook as Book);
    this.isAdd = false;
  }
  public removeCart () {
    this.cartServe.removeCart(this.itemBook as Book);
    this.isAdd = true;
  }
}

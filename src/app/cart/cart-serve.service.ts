import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class CartServeService {
  public cart: Book [] =[];
  constructor() { }
  addCart (cartItem: Book) {
    this.cart.push(cartItem);
  }
  getCart() {
    return this.cart;
  }
  removeCart (cartItem: Book) {
    this.cart = this.cart.filter(d => d != cartItem)
  }
}
